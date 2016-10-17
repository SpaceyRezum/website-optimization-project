## Website Performance Optimization portfolio project

The challenge of this project was to optimize an online portfolio provided by the course manager. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying website optimization and browser rendering techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

The starting version had a Page Speed score of 30 for Desktop & 28 for Mobile (here's a [live version of the starting page](http://cameronwp.github.io/udportfolio/)) and was overall rendering quite poorly. The final version hits a Page Speed score of 93 for Desktop and 86 for Mobile when run on a server that allows compression (in our case on Github Pages).

To find out how I optimized the page, have a look at the [live version here](https://spaceyrezum.github.io/website-optimization/) & check out my commits.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

For this part, I have:

1. Modified the structure of index.html and all the other html pages to make sure that no code was unnecessary blocking the critical rendering path. This included adding media queries to specific stylesheets (i.e. print.css), re-positioning script tags to the bottom of the body tag, adding asynchronous tags to scripts that were not modifying the DOM.

2. Used Grunt, a task-automation tool and its plugin [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) to minify the page's images. You can find the task-automation code in gruntfile.js. You will also find instruction on how to run this code by following the plugin's link.

####Part 2: Optimize Frames per Second in pizza.html

1. Reached a consistent 60fps rendering when scrolling by refactoring updatePosition(). The function was formerly calculating layout and applying style in a for loop which caused jank.

2. Brought the 'time to resize pizzas' under 5ms when changing the pizza size by removing layout calculations from changePizzaSize(size).