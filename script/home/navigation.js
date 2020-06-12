window.onscroll = function() {navigationScroll()};

function navigationScroll() {
  if (document.body.scrollTop > document.getElementById("about-me").offsetTop-300 || document.documentElement.scrollTop > document.getElementById("about-me").offsetTop-300) {
    if (document.getElementById("navigation").className.includes("normal-navigation")) {
      return;
    }

    document.getElementById("navigation").className += " normal-navigation";
  } else {
    if (!document.getElementById("navigation").className.includes("normal-navigation")) {
      return;
    }

    document.getElementById("navigation").className = document.getElementById("navigation").className.substring(0, document.getElementById("navigation").className.length - 18);
  }
}
