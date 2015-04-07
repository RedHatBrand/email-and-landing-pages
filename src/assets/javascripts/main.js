$(document).ready(function () {
  $(document).on("scroll", function () {
    var scrollPos = $(document).scrollTop();
    var heroOffset = scrollPos * (1/-2);
    $(".hero").css("background-position-y",heroOffset);
  });
  
  $("#call-to-action").click(function() {
    $('html, body').animate({
        scrollTop: $("#form-section").offset().top
    }, 1000);
  });
});