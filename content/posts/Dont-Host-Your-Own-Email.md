---
title: Don't Host Your Own Email
tags:
  - self-hosting
categories:
  - tech
  - fluff
author: Emerald
date: 2023-08-17T23:01:19.823Z
showDate: true
showDateUpdated: false
draft: false
showComments: true
---

For just under a year I've been running my own email server by way of [Mailu](https://mailu.io "Mailu"), a system so simple that it makes setting up an email server seem like a good idea. I liked the idea of having total control over my email, not having to rely on any big tech companies just to sign up for things or receive newsletters. I was, of course, naïve. This blog post should be a cautionary tale to anyone considering doing the same: don't make my mistake, or at least do some research before you do.

I had heard that self-hosted email wasn't really a thing, but I assumed that just meant that it wasn't for everyone or perhaps required more effort than, say, a [Jellyfin](https://jellyfin.org/ "Jellyfin") server. In some way I think I was right. Email isn't the sort of thing that you can set up on a raspberry pi in your house and never expose to the internet. Instead it's the opposite: you might not even be *able* to host a mail server from your house, and if you want it to be usable at all it will *need* to be exposed to the internet. And not just that, it will require a not insignificant number of additional DNS records just to work. If that were the end of it, I'm sure there would still be plenty of people willing to host their own email. But of course the issues don't stop there.

The thing that actually stops people from self-hosting email is something that I didn't bother looking into at all before spinning up the VPS for my Mailu setup. As a result of the arms race between spammers and anti-spam measures that's been escalating over the past few decades (and as a way to drive people to their services I guess), major email providers have become increasingly insular. This is the roadblock preventing self-hosted email from being viable. Big companies like Google, Microsoft, Yahoo, etc., have strict and often inscrutable policies regarding what mail they're willing to deliver to their users. There is some amount of standardization here, like using DKIM to verify that an email is coming from where it says it's coming from. But even if the DKIM and SPF records of a sender check out, many providers will still send mail from an IP address they don't recognize to the receiver's spam box (assuming they deliver it at all). Some services (I've had a lot of trouble with Yahoo in this department) won't even send a dmarc report to the sender that mail sent from their server was quarantined or blocked. These policies are meant to prevent spammers from using small mail servers to evade IP blocks and what have you, but has the added effect (unintended or otherwise) of making it infeasible to host your own email server for personal use in most cases.

Before I realized all of this I tried using my server for a variety of things, including signing up for the [Wasabi S3 ](https://wasabi.com/ "Wasabi S3")account for the object storage for [mecha.garden](https://mecha.garden "mecha.garden"). I've sent them a few emails from the admin@mecha.garden address I signed up with, but never got a response. It wasn't for anything critical, thankfully, but if there had been something important I needed to contact them about I would have been up shit's creek without a paddle. I also attempted to use the server for transactional emails for a few of my other self-hosted things, including mecha.garden, and found that most of the time the confirmation emails or whatever would end up in spam or just never arrive depending on what service the recipient was using. I would get dmarc reports from Google pretty frequently, saying that my DKIM and SPF checks had passed, but that their system's disposition was still to quarantine my sent mail. A month or two ago I finally caved and set up sendgrid for the Garden, and I haven't had any issues since.

Despite my best efforts I've basically thrown in the towel, recently moving the mail handling for the mecha.garden domain over to [Skiff](https://skiff.com "Skiff"), and using [Gandi](https://www.gandi.net/en-US "Gandi")'s free built-in email for my newer domains. It's disappointing that this is the state of email, but it is what it is I suppose. That said, Mailu is great and easy to set up, so if you're not planning on sending any mail or just want to give it a shot despite it all, definitely check it out.
