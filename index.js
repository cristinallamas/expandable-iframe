'use strict';
// Grab id from iframe.
const id = window.frameElement.id;
// Greab the iframe.
const iframe = window.parent.document.getElementById(id);
// Store the value of the initial height of the iframe.
const initialIframeHeight = iframe.style.height;

var Expander = {
  // Function that expands iframe up to the height defined in distance.
  expand: function(transition,distance) {
    var containerNode = (iframe === null) ? null : iframe.parentNode;
    if (containerNode === null) return null;
    containerNode.style.height = distance;
    iframe.style.height = distance;
    iframe.style.transition = transition;
    containerNode.style.transition = transition;
  },

  // Function that collapses the iframe to its initial state.
  collapse: function(transition){
    var containerNode = (iframe === null) ? null : iframe.parentNode;
    if (containerNode === null) return null;
    containerNode.style.height = initialIframeHeight;
    iframe.style.height = initialIframeHeight;
    iframe.style.transition = transition;
    containerNode.style.transition = transition;
  }

};

module.exports = Expander;
