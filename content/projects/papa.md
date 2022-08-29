---
title: "Papa"
date: 2022-08-27T01:39:45-04:00
draft: true
projURL: "https://github.com/AnActualEmerald/papa"
summary: "A command line mod manager"
---

# PAPA
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
everything to the right folder was a bit too tedious for me. This is where `papa` comes in

> The name 'papa' is a  reference to a Titanfall 2 community inside joke where one of the Titans, Scorch, is referred to as 'Papa Scorch', owing to his bulky, heavy-set frame.

### The project
What I was looking for was a package manager; something along the lines of Debian's `apt`. There are a number of other options, namely [viper](https://github.com/0neGal/viper) and [VTOL](https://github.com/BigSpice/VTOL),
but both 

