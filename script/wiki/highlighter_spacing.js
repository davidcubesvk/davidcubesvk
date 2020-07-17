//Add listener
window.addEventListener("load", function() {
  //Get all "pre" elements
  var preElements = document.getElementsByTagName("pre");
  //Loop through all elements
  for (var x = 0; x < preElements.length; x++) {
    //Element
    var element = preElements[x];
    //Set margin to 0
    element.style.margin = 0;
    //Set top and bottom padding to 0
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
  }
});
