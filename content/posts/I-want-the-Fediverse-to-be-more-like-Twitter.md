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

There are a lot of things to like about the fediverse. Interactions on the whole are more genuine and less driven by clout, nobody is mining your data to sell to advertisers \~\~more than usual\~\~, and in general it's just a nicer place to be online. But for as long as I've been on fedi (the microblogging sphere at least), there's always been a feeling in the back of my mind that something *wasn't quite right*. Recently it came into focus for me what that feeling is being caused by: the missing reply problem. It's not a secret that on Mastodon and the software in it's sphere of influence (Pleroma, Misskey, etc.), when you see a post from a federated server, you're only seeing *some* of the information associated with that post. Specifically you will only see replies and reactions to a post that were made by a user that already sends your instance their activities, or that one such use has themselves replied or reacted to. The result of this is that the majority of posts in the global/federated timeline look like nobody has interacted with them; not a problem in and of itself per se, but I think this is a major contributor to the "walking on eggshells" feeling a lot of fedi newcomers mention, myself included. I'd like to use this post to explore this problem a bit, and maybe try to brainstorm some solutions as I think solving this would make fedi feel more vibrant and perhaps get more people interested in using it over other alternatives.

## So what is the problem here, really?

The technical reasons for this behavior boil down to how ActivityPub works, or at least how it's employed in most major fediverse software.
