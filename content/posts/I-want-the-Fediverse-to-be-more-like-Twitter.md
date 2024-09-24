---
title: I want the Fediverse to be more like Twitter
tags:
  - activitypub
  - fediverse
categories:
  - fluff
  - tech
date: 2024-02-09T22:06:13.262Z
draft: false
---

## The "Missing Replies" Problem

It's not a secret that on Mastodon and the software in it's sphere of influence (Pleroma, Misskey, etc.), when you see a post from a federated server, you're only seeing _some_ of the information associated with that post. Specifically you will only see replies and reactions to a post that were made by a user that already sends your instance their activities, or that one such use has themselves replied or reacted to. The result of this is that the majority of posts in the global/federated timeline look like nobody has interacted with them; not a problem in and of itself per se, but I think this is a major contributor to the "walking on eggshells" feeling a lot of fedi newcomers mention, myself included. I'd like to use this post to explore this problem a bit, and maybe try to brainstorm some solutions as I think solving this would make fedi feel more vibrant and perhaps get more people interested in using it over other alternatives.

## So what's the issue here, really?

The technical reasons for this behavior boil down to how ActivityPub works, or at least how it's employed in most major fediverse software. To understand this, let's look at an example. A user on Server A, Alice, is following a user on Server B, Bob. When Bob creates a public post, Server B wraps that post (usually a `Note` object in ActivityStreams parlance) in a `Create` activity and sends it off to a bunch of different places. Most relevant to this example is Alice' `inbox`, where upon receiving the `Create` activity, Server A will do some processing to show Bob's post in Alice' feed. Simple enough.

Now let's say a user on Server C, Charles, also follows Bob and sees his post. Charles decides to leave a reply to Bob's post, and Server C wraps that reply up in another `Create` activity and sends it to all of Charles' followers, and to Bob's `inbox` on Server B. Now both people that follow Charles, other users on Server C, and users on Server B can see Charles' reply to Bob's post. Even people who don't follow Bob and didn't see his post originally will now be able to see it as it was referenced in Charles' reply, allowing their server to retrieve the post from Server B. But, unless someone on Server A follows Charles, or follows someone else who interacts with Charles' reply in some way, Alice won't be able to see it. Indeed Server A has no way to even know that there _are_ replies to Bob's post, nor to ask for them to be sent after the fact. This also affects favorites/reactions.

## Okay, but who cares?

There are a few reasons why I think this behavior is more detrimental to the health of the federation than people give it credit. Let's start with a practical reason. YouTuber and heat pump enthusiast [Technology Connections](https://www.youtube.com/@TechnologyConnections) has complained [a](https://mas.to/@TechConnectify/111324366704315475) [few](https://mas.to/@TechConnectify/111513880618627615) [times](https://mas.to/@TechConnectify/111545406365140129) about the nature of federation and how it makes certain types of interaction more difficult than on Twitter or a similar but centralized service. Most of TC's complaints center around moderation (which is its own can of worms honestly), but I think some of the things in those threads could at least be mitigated if the visibility of replies wasn't so fragmented. If bad faith or abusive replies were seen by more people, then there would not only be more pressure on that user's moderators to take some sort of action, but it would also help limit misbehaving instances from the federation in general.

Beyond the issue of moderation, the current state of replies also exacerbates the existing issue of people posting the same reply over and over again. Usually this is due to not checking/not caring to check if some one else already said whatever you were going to say. But of course, on fedi it's much harder to ensure that you aren't repeating someone else as it involves viewing the post you're replying to on its home instance, typically requiring a new browser window or leaving a mobile app or whatever. This probably isn't a huge issue for most users, but for larger accounts like Mr. Connections, it can be pretty annoying if nothing else (I'm pretty sure he's complained about this specifically as well but I couldn't find the toot because Mastodon's text search is also its own can of worms).

My reasoning for being so bothered by this that I wrote a blog post about it is more straightforward: it breaks user expectations and makes fedi seem more dead than it is. It doesn't seem like a huge ask that a user be able to see all of the information associated with a post they're looking at, or at least be able to ask for it. A new mastodon user who isn't aware of this issue is likely to see a global timeline filled with posts that have little to no interaction and assume that fedi users prefer to scream into the void than to engage with each other. I think this is what leads to the "f\*cked vibes" feeling a lot of people get when they join the federation for the first time, especially for people on smaller instances with less active local timelines.

## Sure, but what can be done about it?

I have to confess something. I am not an ActivityPub developer. That is, I haven't written any code that directly interacts with ActivityPub that is currently in production. But I have read enough of the specs that I think I can talk about this. With that in mind, let's look at some options.

### Option 1: Long Live the Relay

There is an existing solution to this problem, after a fashion. ActivityPub relays are a special class of AP server that simply sends activities from a member server to all other servers subscribed to the relay. In the example from earlier, Alice would be able to see Charles' reply if Server A, Server B, and Server C where all subscribed to the same relay. Cool! But relays have a big drawback: they replicate all activity, even activity that a member server otherwise wouldn't be interested in. This firehose can be good for discovery, or potentially for bootstrapping a smaller instance, but has the effect of quickly inflating the database sizes of all the servers involved, especially for large relays with many members. Plus this would only "fix" missing replies for servers within a relay; instances outside the relay would still experience the issue. Short of relaying the entire network (which would be functionally impossible), this is not a good solution.

### Option 2: Could You Repeat That?

If we scale down relays a bit and integrate them into the existing microblogging servers, we could get the best of both worlds. The idea here is that when Server B receives the Create activity from Sever C, it would repeat it to all the servers to which it sent Bob's original post. This method as a few benefits in that it wouldn't require much change in how existing software functions, and would ensure that whoever can see Bob's post can also see all of its replies and reactions. However, I think this could have a similar effect to a relay in that it would potentially add a lot of information that would need to be stored in the form of extra Notes and what have you on the receiving servers, and could add a lot of load to Server B, which would need to send more activities than it would have had to previously. It would be up to the implementers to determine how much of an impact this would have, and if that is a good enough tradeoff, but I think it's a viable way to fix missing replies.

### Option 3: The One I Kind of Like Actually

This option would require the biggest changes to existing implementations, but I think it also offers the best balance of being able to see replies while limiting undue server load. In ActivityPub there is a class of object called a Collection. Unsurprisingly this represents a collection of objects (wow!). I think the best way to solve this issue would be to add replies and reactions collections to Note objects, each containing only the IDs of the relevant objects on the origin server of the Note, Server B in our example. This approach provides a lot of flexibility as the collections could simply point to some endpoint that would dynamically fetch the relevant data, or they could embed collections in the Note which could be Updated by the origin server in real time or periodically to reduce load. This way there isn't a bunch of extraneous data that nobody cares about being thrown around since the reply and reaction objects could only be fetched when a user actually wants to see them. This extension would need to be standardized to be useful, but I think something like this could really help the fediverse user experience.

## The conclusion section

This is the part where I tell you that I did minimal (read: no) research before writing this, so if there are already proposals to remedy this out there I am blissfully unaware of them. I came to the realization that this my biggest problem with fedi after scrolling through Bluesky for a little bit and remembering what reading replies without having to open Firefox was like, never mind being able to see real "likes" counts. I understand that this probably doesn't bother most users the way it does me, but I don't see why we can't aspire to have a federated social network that is federated, social, and a network. Anyways, I wrote this entire thing on company time so I should probably get back to my "job" or whatever. Thanks for reading.
