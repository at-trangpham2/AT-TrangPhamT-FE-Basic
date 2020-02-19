var addStickyModule = (function() {
  var $stickyList = document.getElementById('js-menu-sticky');
  var $sticky = document.getElementsByClassName('menu-item-group');
  
  function initSticky(data){
    renderData(data);
    $stickyList.addEventListener('scroll', addFunctionForSticky);
  }
  function renderData(data) {
    $stickyList.innerHTML = "";
    var domSticky = "";
    for (var i = 0; i < data.length; i++) {
      domSticky +=
        '<li class="menu-item menu-item-group">' +
        '<h2 class="title-sticky">' +
        data[i].title +
        "</h2>" +
        '<ul class="menu-list menu-list-data">';
      for (var j = 0; j < data[i].subData.length; j++) {
        domSticky +=
          '<li class="menu-item menu-item-data">' + data[i].subData[j] + "</li>";
      }
      domSticky += "</ul>" + "</li>";
    }
    $stickyList.innerHTML += domSticky;
    
  }
  function addFunctionForSticky() {
    for (var i = 0; i < $sticky.length; i++) {
      if ($stickyList.offsetHeight >=$sticky[i].offsetHeight) {
        $sticky[i].classList.add('fixed');
      } else {
        $sticky[i].classList.remove('fixed');
      }

      if (
        $stickyList.offsetHeight >=
        $sticky[i].offsetTop + $sticky[i].offsetHeight + 45
      ) {
        $sticky[i].classList.add('scrolled');
      } else {
        $sticky[i].classList.remove('scrolled');
      }
    }
  }

  return {
    initSticky: initSticky
  };
})();


