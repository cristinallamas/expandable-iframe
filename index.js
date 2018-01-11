
function Expander(container) {

  // is an iframe
  if(window.frameElement !== null){
    // Grab iframe id.
    this.id = (window.frameElement.id === null) ? null : window.frameElement.id;
    // wrapper = iframe.
    this.wrapper = window.parent.document.getElementById(this.id);
  }
  else{
    if(container){
      // if not an iframe we grab the parent div.
      this.wrapper = container.parentNode;
    }
  }
  // Grab original (on load) height of wrapper.
  var wrapperHeight = this.wrapper.clientHeight;


  this.assignVariables = function(){

  }
  this.expand = function(containerHeight,transition,time) {

    // Resize iframe
    this.wrapper.style.height = containerHeight;
    // Apply CSS transition.
    animate(transition,time);

  }.bind(this);

  this.collapse = function(transition,time) {

    this.wrapper.style.height = wrapperHeight + 'px';
    // Apply CSS transition.
    animate(transition,time);


  }.bind(this);

  var animate = function(transition,time) {
      var start = Date.now();
      var loop = function() {
          container.style.transitionTimingFunction = transition;
          container.style.transitionDuration = time + 's';
          this.wrapper.style.transitionTimingFunction = transition;
          this.wrapper.style.transitionDuration = time+'s';
          // Stop running after transition stops.
          if (Date.now() - start < stop) {
            requestAnimationFrame(loop);
          }
      }.bind(this);

      loop(); // fire the initial loop

  }.bind(this);
}

module.exports = Expander;
