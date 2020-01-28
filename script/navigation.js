window.onscroll = function() {navigationScroll()};

function navigationScroll() {
  if (document.body.scrollTop > document.getElementById("about-me").offsetTop-300 || document.documentElement.scrollTop > document.getElementById("about-me").offsetTop-300) {
    if (document.getElementById("menu").className.includes("scrollMenu")) {
      return;
    }

    document.getElementById("menu").className += " scrollMenu";
    document.getElementById("navigation").className += " scrollNavigation";

    var navigationTab = document.getElementsByClassName("menuItem");
    for (var i = 0; i < navigationTab.length; i++) {
      navigationTab[i].className += " scrollMenuItem";
    }

  } else {
    if (!document.getElementById("menu").className.includes("scrollMenu")) {
      return;
    }

    document.getElementById("menu").className = document.getElementById("menu").className.substring(0, document.getElementById("menu").className.length - 11);
    document.getElementById("navigation").className = document.getElementById("navigation").className.substring(0, document.getElementById("navigation").className.length - 17);

    var navigationTab = document.getElementsByClassName("menuItem");
    for (var i = 0; i < navigationTab.length; i++) {
      navigationTab[i].className = navigationTab[i].className.substring(0, (navigationTab[i].className.length - 15));
    }
  }
}
