function progressBar() {
  var $animation_elements = $(".progress-bars__animation");

  $(window).on("scroll resize", function () {
    var viewportHeight = document.documentElement.clientHeight;

    $animation_elements.each(function () {
      var $el = $(this);
      var position = this.getBoundingClientRect();

      if (position.top > viewportHeight || position.bottom < 0) {
        this.inView &&
          $el.css({
            width: 0,
          });
        this.inView = false;
      } else {
        !this.inView &&
          $el.css({
            width: $el.data("percent") + "%",
          });
        this.inView = true;
      }
    });
  });
}
