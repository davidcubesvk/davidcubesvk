window.addEventListener("load", function() {
  //Get footer element
  var footer = document.getElementsByTagName("footer")[0];
  
  //If the footer is visible on the page (the page content does not exceed one display screen - no scrolling available)
  if (footer.offsetTop+footer.scrollHeight < screen.height) {
    //Position to bottom
    footer.style.bottom = 0;
    //Set position to fixed
    footer.style.position = "fixed";
  }
});
