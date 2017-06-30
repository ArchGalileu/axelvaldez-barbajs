---
title: New Website!
layout: default
---
I've been meaning to build a proper personal website for years. The blockers are always the same: the design isn't good enough, I don't have enough content for the sections I want to include, day work takes over and I never have the chance to code it all, etc.

## The Story

A couple days ago I couldn't sleep and I was thinking just about that. Then I decided to do an exercise: to define the minimal website I could create with the content I already had on hand. No extensive image preparation, no case studies, no decoration even. Just a simple layout for the content I already had.

I quickly made a list of content and sketched out a very rough layout and decided (seeing that I wasn't able to sleep anyway) to give it a couple hours and see how it resulted. I quickly set up a new local site on Local by Flywheel (I work daily with WordPress and that's my quickest route to make a website) and I got to coding.

The result was a very simple WordPress theme with the exact layout you're seeing right now. I uploaded the work content on the home page, selected lettering exercises for the lettering section, and a short about page. I had bookmarked [Macy.js](http://macyjs.com/) a few months ago so I used that for masonry-style image layouts with no issues at all.

During the next day I kept on making small changes to the content and added [Barba.js](http://barbajs.org/) (which I saw earlier on [Dan Perrera's website](https://perrera.com/)) for asynchronous page loading and caching, along with [animate.css](https://daneden.github.io/animate.css/) for fancy page transitions. The minimal website was ready to go.

## Enter Jekyll

That night I read a lot about static websites. I had used Jekyll in the past, but it was a couple years ago and I didn't really remember how to set it up locally. The idea of having the full website running on GitHub was very attractive, so I decided to give it a couple more hours and try to install it and convert the WordPress theme to a Jekyll one. If everything failed, I already had a functioning website running anyway.

The surprise here was that in about 30-40 minutes I had the exact copy of the website already running locally. I then set up a GitHub repo, pushed the files, configured the domain (it took a couple minutes and resolved almost immediately).

That was it. In a couple days I solved what had been bugging me for years, and I learned a couple things in the process.

## The Stack

If you're interested, here's a summary of what I used to build this super simple website:

* Running on [Jekyll](https://jekyllrb.com/)
* Hosted in [GitHub Pages](https://pages.github.com/), in a [project repo with a custom domain](https://github.com/axelvaldez/axelvaldez.mx)
* Image tiles generated with [Macy.js](http://macyjs.com/)
* Asynchronous Loading thanks to [Barba.js](http://barbajs.org/)
* Loading animations with [animate.css](https://daneden.github.io/animate.css/)

Also, a few days ago I knew about [Forestry](https://forestry.io/), a web-based CMS that connects to a Jekyll website and puts a UI on it. I'm writing this posts in its editor, but I don't like the way it stores media (I want to upload to /media/{{page.title}} and it only supports date-based folders), so I will probably use it just for minor post edits.

I use [Atom](https://atom.io/) for my code, and a weird combination of AI, PS and Sketch for my images.

Have a comment? [Hit me up on Twitter](https://twitter.com/axel)!
