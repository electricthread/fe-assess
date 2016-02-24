(function () {
  var colorChange, nav;

  colorChange = function() {
    var scrollPos, targetOpacity;
    scrollPos = $(document).scrollTop();
    targetOpacity = 0.0 + (Math.min(scrollPos / 500, 1));
    $(".app-header").css({
      "background-color": "rgba(255, 255, 255, " + targetOpacity + ")",
      "border-color": "rgba(204, 204, 204, " + targetOpacity + ")"
    });
  };

  nav = function () {

    // Sliding Mobile Navigation
    $('#menu-button, #menu-screen').on('click touchstart',function (e) {
      $('.app-header .nav-list, #menu-screen').toggleClass('is-visible');
      e.preventDefault();
    });

    // Fading Background Color (colorChange)
    $(".app-header").css({
      "background-color": "rgba(255, 255, 255, 0)",
      "border": "1px solid rgba(204, 204, 204, 0)"
    });

    $(window).scroll(function() {
      colorChange();
    });

  }

  feAssess.Nav = function () {
    nav();
  }
  
}(this));