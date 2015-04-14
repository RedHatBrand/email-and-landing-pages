$(function () {
  $('a.menu-link').on('click', function() {
    var target;
    $('.nav-menu').addClass('nav-hide');
    $('.nav-toggle').removeClass('active');
    $('.nav-menu li').removeClass('active');
    $(this).closest('li').addClass('active');
    target = $(this).attr('href');
    $.smoothScroll({
      scrollTarget: target,
      offset: -60
    });
    return false;
  });
});
