var addStickyModule = (function() {
  // "use strict";
  var stickyEL = document.getElementsByClassName('menu-item-group');
  function addFunctionForSticky() {
    for (var i = 0; i < stickyEL.length; i++) {
      if (window.pageYOffset >= stickyEL[i].offsetTop) {
        stickyEL[i].classList.add('fixed');
      } else {
        stickyEL[i].classList.remove('fixed');
      }

      if (
        window.pageYOffset >=
        stickyEL[i].offsetTop + stickyEL[i].offsetHeight - 45
      ) {
        stickyEL[i].classList.add('scrolled');
      } else {
        stickyEL[i].classList.remove('scrolled');
      }
    }
  }

  return {
    handleSticky: addFunctionForSticky
  };
})();
window.addEventListener('scroll', addStickyModule.handleSticky);
