function positionFooter() {
  var footer = document.getElementsByTagName("footer")[0];

  if (footer.offsetTop+100 < screen.height) {
    footer.style.bottom = 0;
    footer.style.position = "fixed";
  }
}
