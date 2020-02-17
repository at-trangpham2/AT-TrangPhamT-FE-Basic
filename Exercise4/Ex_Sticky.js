var scrollModule = (function() {
  // "use strict";
  var stickyScroll = document.getElementsByClassName("menu-item-big");
  function handleFixAndScroll() {
    for (var i = 0; i < stickyScroll.length; i++) {
      if (window.pageYOffset >= stickyScroll[i].offsetTop) {
        stickyScroll[i].classList.add("fixed");
      } else {
        stickyScroll[i].classList.remove("fixed");
      }

      if (
        window.pageYOffset >=
        stickyScroll[i].offsetTop + stickyScroll[i].offsetHeight - 45
      ) {
        stickyScroll[i].classList.add("scrolled");
      } else {
        stickyScroll[i].classList.remove("scrolled");
      }
    }
  }

  return {
    addFixedScroll: handleFixAndScroll
  };
})();
window.addEventListener("scroll", scrollModule.addFixedScroll);
