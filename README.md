# About
Plugin that allows resizing of the parent iframe containing our page.

The plugin allows 2 parameters to be passed as arguments.

## Distance

This describes the max height the iframe is allowed to expand.

## Transition

This is the css transition to apply to that resizing.

# Usage

```
var iframeExpand = require('expandable-iframe');
// grab a dom element lets say variable container
var expanderInstance = new iframeExpand(container);
// Define your transition here.
var transition = 'linear';
var timeinSeconds = 0.5;

expanderInstance.expand(container.style.height,transition,timeinSeconds);
expanderInstance.collapse(transition,timeinSeconds);


```
