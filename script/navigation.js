window.onscroll = function() {navigationScroll()};

function navigationScroll() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("scrollNavigation").className = "navigation transitionNavigation";
  } else {
    document.getElementById("scrollNavigation").className = "navigation";
  }
}
