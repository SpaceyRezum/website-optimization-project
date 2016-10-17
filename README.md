## Website Performance Optimization portfolio project

The challenge of this project was to optimize an online portfolio provided by the course manager. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying website optimization and browser rendering techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

The starting version had a Page Speed score of 30 for Desktop & 28 for Mobile (here's a [live version of the starting page](http://cameronwp.github.io/udportfolio/)) and was overall rendering quite poorly.

To find out how I optimized the page, have a look at the live version here (add link) & check out my commits.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

For this part, I have:

1. Modified the structure of index.html and all the other html pages to make sure that no code was unnecessary blocking the critical rendering path. This included adding media queries to specific stylesheets (i.e. print.css), re-positioning script tags to the bottom of the body tag, adding asynchronous tags to scripts that were not modifying the DOM.

2. Used Grunt, a task-automation tool and its plugin [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) to minify the page's images. You can find the task-automation code in gruntfile.js. You will also find instruction on how to run this code by following the plugin's link.

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
