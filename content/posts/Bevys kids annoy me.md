+++
title = "Bevy's kids annoy me"
date = 2024-12-24T09:50:56-05:00
draft = false
categories = ['tech']
tags = ['game dev', 'bevy']
+++
One thing I'm running into a lot with [Bevy](https://bevyengine.org) while building out a UI-heavy app that I'm working on is that I often want to make a function or something that lets me easily spawn the same bundle of UI nodes and styles. Conceptually this isn't that far removed from a function component in [insert web framework here], but there's one thing that those have that Bevy can't as easily provide. If I want to define a function that returns a bundle of components to be spawned, there's no way for me to also define the children I want that bundle to have without actually spawning entities. Now, this can be worked around to some extent by having that function look something like this: 
```rust
fn button(commands: &mut Commands, content: &str) -> Entity
```
This way you spawn the button and its content, and get the `Entity` back so that you can do other things with it (attach observers, add other children, etc.). But to me this doesn't feel great, as it breaks the usual flow of spawning bundles in Bevy. And, if you want to add more options to that button you'll have to update every location you use the function even if it's unrelated. Realistically this is probably fine, but I don't know. Something about it just doesn't click for me. 

It would be nice if there were some kind of `Child` component that could be added to a bundle that contains _another_ bundle that, when spawned, would be added to a child entity instead. I don't think the `Child` component would ever even appear _on_ an entity, it would be caught during spawning and generate a new command to spawn its bundle as a child or something (Note: I haven't actually looked at how spawning works ¯\\\_(ツ)\_/¯). This way rather than having to do `spawn` and then `with_child` or `with_children` or any of that, you could just spawn a bundle that looks like this:
```rust
( 
    Node::default(), 
    Child(Text::new("Hello world!".into)) 
)
```
And then bevy would figure it out behind the scenes. This would almost definitely get messy and hard to read with more than one level of nesting, but I'd argue that already the case when spawning children anyways. It would also enable the `button` function to look like this:
```rust
fn button(content: &str) -> impl Bundle
```
But now it doesn't have any side-effects (memory allocation not withstanding), and slots nicely into the typical spawning flow:
```rust
commands.spawn(button("Hello world!")).observe(some_click_handler);
```

I'm sure this would be a pretty niche case, but I think it would help make the experience of working with Bevy's UI stuff a little smoother. Anyways, you may see a crate pop up over the new year that does something like this using component hooks. Probably unrelated though.