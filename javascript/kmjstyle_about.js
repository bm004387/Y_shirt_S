// 우측 빠른메뉴
$(document).ready(function () {
  var currentPosition = parseInt($(".quickmenu").css("top"));
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    $(".quickmenu")
      .stop()
      .animate({ top: position + currentPosition + "px" }, 1000);
  });
});
