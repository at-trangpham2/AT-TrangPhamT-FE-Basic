var addStickyModule = (function() {
  // "use strict";
  var $sticky = document.getElementsByClassName('menu-item-group');
  function addFunctionForSticky() {
    for (var i = 0; i < $sticky.length; i++) {
      if (window.pageYOffset >= $sticky[i].offsetTop) {
        $sticky[i].classList.add('fixed');
      } else {
        $sticky[i].classList.remove('fixed');
      }

      if (
        window.pageYOffset >=
        $sticky[i].offsetTop + $sticky[i].offsetHeight - 45
      ) {
        $sticky[i].classList.add('scrolled');
      } else {
        $sticky[i].classList.remove('scrolled');
      }
    }
  }

  return {
    handleSticky: addFunctionForSticky
  };
})();
window.addEventListener('scroll', addStickyModule.handleSticky);
