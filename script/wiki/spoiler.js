//Maximum expandable code block height (in vh/100)
var maximumCodeHeight = "0.7";

window.addEventListener("load", function() {
  //Get all spoilers
  var spoilers = document.getElementsByClassName("expandable");

  //Loop through all
  for (var i = 0; i < spoilers.length; i++) {
    //Set max-height to 0px for each expandable if not opened by default
    if (!spoilers[i].classList.contains("open")) {
      spoilers[i].getElementsByClassName("content")[0].style.maxHeight = "0px";
    } else {
      //Get content element
      var content = spoilers[i].getElementsByClassName("content")[0];
      //Set to opened if by default
      openContent(content);
    }

    //Add event listeners
    spoilers[i].getElementsByClassName("header")[0].addEventListener("click", function() {
      //Animate the symbol by toggling the class
      this.parentElement.classList.toggle("open");

      //Get content element
      var content = this.parentElement.getElementsByClassName("content")[0];
      if (content.style.maxHeight == "0px") {
        openContent(content);
      } else {
        content.style.maxHeight = "0px";
      }
    });
  }
});

function openContent(content) {
  //If it is a code block
  if (content.parentElement.classList.contains("code-block")) {
    //Set to maximum code height or it's height if smaller
    content.style.maxHeight = Math.min(document.documentElement.clientHeight * maximumCodeHeight, content.offsetHeight + content.scrollHeight) + "px";
  } else {
    //Set to element's full height
    content.style.maxHeight = (content.offsetHeight + content.scrollHeight) + "px";
  }
}
