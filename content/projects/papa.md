---
title: "Papa"
date: 2022-08-27T01:39:45-04:00
draft: false
projURL: "https://github.com/AnActualEmerald/papa"
summary: "A command line mod manager"
---

## A command line mod manager for the Northstar framework

### Context
One of the first projects I've started that was born out of a need that I had that 
wasn't being met by existing software. [Northstar](https://northstar.tf/) is a modding framework for the 
game Titanfall 2, a game near and dear to my heart as one of the few games I've
played that really gets the feel of mecha right. Sadly it has been left in a state of 
limbo by the developers and publisher, leaving the servers vulnerable to hackers and DDOS attacks,
among other things. Northstar is a project that aims to pivot the game to be as community driven as it can be
without access to the source of the game itself. At time of writing this consists of a community server browser
and mods for gameplay and some limited visuals (custom maps, models, and animations are very much a work in progress).  

After starting a server myself on a VPS service, I found that there was no good process for installing serverside mods without
a GUI. Technically it is possible to `curl` or `wget` the zip files that the mods come packed in, but unzipping them and moving
everything to the right folder was a bit too tedious for me. This is where `papa` comes in.


### The project
What I was looking for was a package manager; something along the lines of Debian's `apt`. There are a number of other options, namely [Viper](https://github.com/0neGal/viper) and [VTOL](https://github.com/BigSpice/VTOL),
but both involve relatively heavy GUI dependencies and, until recently, VTOL didn't officially support Linux at all. It should be mentioned that Viper does have a CLI, but it is tied to the rest of the
main Electron application. Obviously bringing the entire Electron stack into a headless server environment is ineffecient at best.

I set about thinking through the steps that would be required to install a mod. First, of course, the archive would need to be downloaded from the remote host ([Thunderstore](https://northstar.thunderstore.io) in this case).
Then, that archive would need to be extracted and all the necessary, non-metadata files moved to the correct location in the folder structure. I knew I would also want to keep track of things like
mod version and install path to make updating mods easier down the road. Rust would be my language of choice for this, as it is for most things these days, and thankfully all of the nitty-gritty
parts of these steps are covered by crates from the ecosystem. Namely, [zip](https://crates.io/crates/zip), [reqwest](https://crates.io/crates/reqwest) with streams enabled, and of course, [serde](https://crates.io/crates/serde).
For the index files I chose [ron](https://crates.io/crates/ron) as the format, for no other reason than that I think it's neat.

Getting a working version was actually easier than I thought. Even handling the file downloading was refreshingly simple thanks to the async streaming API from [futures_util](https://crates.io/crates/futures-util). Everything
just kind of worked out of the box, and I was able to get a fairly stable release built in a day or two while quarantined with Covid. 
I've kept working on it, now without quite as much covid-brain, and now `papa` has matured into a stable, functional cli that I use to keep my server mods up to date. 

### The rewrite
As with any good project, `papa` is being rewritten practically from the ground up. Other devs within the Northstar scene expressed interest in using `papa`'s guts in their own projects,
rather than having to reinvent the wheel. To that end, the core functions of `papa` have been (or are being) spun out into a separate crate, [thermite](https://gitea.greenboi.me/Emerald/thermite).
Doing so provides the dual benefits of making my work accessible to anyone who might want to use it, as well as giving me a chance to do some tidying up behind the scenes. The aformentioned covid-brain
really shows in some of the core layout of `papa`. In general I think it is good practice in rust to keep as many bits of your application in their own crates as possible. Until such a time that [crates.io](https://crates.io) is no longer free (which I 
think Hell would more likely freeze first), there's no reason to not just publish first and ask questions later. 

