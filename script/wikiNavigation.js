window.onscroll = function() {
  wikiNavigation()
};

function wikiNavigation() {
  //All navigation items
  var navigationItems = document.getElementsByClassName("wikiSideBar hoverable");
  //All section titles
  var titles = document.getElementsByClassName("sectionTitle");
  //Variable with current section's title element
  var current;

  //Find the current section
  if (document.documentElement.scrollTop < titles[0].offsetTop) {
    //If the scroll index is smaller than first title
    current = titles[0].innerText.substring(0, titles[0].innerText.length - 1);
  } else {
    //Search for the current section's title
    for (var x = 0; x < titles.length; x++) {
      if (titles[x].offsetTop <= document.documentElement.scrollTop) {
        current = titles[x].innerText.substring(0, titles[x].innerText.length - 1);
      }
    }
  }

  //Check the active item
  if (document.getElementsByClassName("wikiSideBar active").length > 0) {
    //Active item
    var activeItem = document.getElementsByClassName("wikiSideBar active");

    //Deactivate or keep active if needed
    if (current.includes(activeItem[0].innerText)) {
      activeItem[0].className = "wikiSideBar active";
    } else {
      activeItem[0].className = "wikiSideBar hoverable";
    }
  }
  //Find the corresponding element in side bar with the current section's title
  for (var x = 0; x < navigationItems.length; x++) {
    //If found set as active
    if (current.includes(navigationItems[x].innerText)) {
      navigationItems[x].className = "wikiSideBar active";
    } else {
      navigationItems[x].className = "wikiSideBar hoverable";
    }
  }
}
