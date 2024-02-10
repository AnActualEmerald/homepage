---
title: I want the Fediverse to be more like Twitter
tags:
  - activitypub
  - fediverse
categories:
  - fluff
  - tech
author: Emerald
date: 2024-02-09T22:06:13.262Z
showDate: true
showDateUpdated: false
draft: true
---

# The "Missing Replies" Problem

It's not a secret that on Mastodon and the software in it's sphere of influence (Pleroma, Misskey, etc.), when you see a post from a federated server, you're only seeing *some* of the information associated with that post. Specifically you will only see replies and reactions to a post that were made by a user that already sends your instance their activities, or that one such use has themselves replied or reacted to. The result of this is that the majority of posts in the global/federated timeline look like nobody has interacted with them; not a problem in and of itself per se, but I think this is a major contributor to the "walking on eggshells" feeling a lot of fedi newcomers mention, myself included. I'd like to use this post to explore this problem a bit, and maybe try to brainstorm some solutions as I think solving this would make fedi feel more vibrant and perhaps get more people interested in using it over other alternatives.

## So what's the issue here, really?

The technical reasons for this behavior boil down to how ActivityPub works, or at least how it's employed in most major fediverse software. To understand this, let's look at an example. A user on Server A, Alice, is following a user on Server B, Bob. When Bob creates a public post, Server B wraps that post (usually a `Note` object in ActivityStreams parlance) in a `Create` activity and sends it off to a bunch of different places. Most relevant to this example is Alice' `inbox`,  where upon receiving the `Create` activity, Server A will do some processing to show Bob's post in Alice' feed. Simple enough.

Now let's say a user on Server C, Charles, also follows Bob and sees his post. Charles decides to leave a reply to Bob's post, and Server C wraps that reply up in another `Create` activity and sends it to all of Charles' followers, and to Bob's `inbox` on Server B. Now both people that follow Charles, other users on Server C, and users on Server B can see Charles' reply to Bob's post. Even people who don't follow Bob and didn't see his post originally will now be able to see it as it was referenced in Charles' reply, allowing their server to retrieve the post from Server B. But, unless someone on Server A follows Charles, or follows someone else who interacts with Charles' reply in some way, Alice won't be able to see it. Indeed Server A has no way to even know that there *are* replies to Bob's post, nor to ask for them to be sent after the fact. This also affects favorites/reactions. 

## Okay, but who cares?

There are a few reasons why I think this behavior is more detrimental to the health of the federation than people give it credit. Let's start with a practical reason. YouTuber and heat pump enthusiast [Technology Connections](https://www.youtube.com/@TechnologyConnections) has complained [a](https://mas.to/@TechConnectify/111324366704315475) few
