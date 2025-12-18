$(document).ready(function () {
  $(".clients-slider").slick({
    centerMode: true,
    centerPadding: "5px",
    slidesToShow: 5,
    asNavFor: ".clients-review-slider",
    variableWidth: true,
  });
  $(".clients-review-slider").slick({
    slidesToShow: 1,
    asNavFor: ".clients-slider",
    speed: 400,
    fade: true,
    cssEase: "linear",
  });
  $(".clients-slider .slick-center").prev().addClass("slick-left");
  $(".clients-slider .slick-center").next().addClass("slick-right");
  $(".clients-slider .slick-center").prev().prev().addClass("slick-start");
  $(".clients-slider .slick-center").next().next().addClass("slick-end");
  $(".clients-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".clients-slider")
        .find(".slick-center")
        .prev()
        .removeClass("slick-left");
      $(".clients-slider")
        .find(".slick-center")
        .next()
        .removeClass("slick-right");
      $(".clients-slider")
        .find(".slick-center")
        .prev()
        .prev()
        .removeClass("slick-start");
      $(".clients-slider")
        .find(".slick-center")
        .next()
        .next()
        .removeClass("slick-end");
    }
  );
  $(".clients-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".clients-slider").find(".slick-center").prev().addClass("slick-left");
      $(".clients-slider").find(".slick-center").next().addClass("slick-right");
      $(".clients-slider")
        .find(".slick-center")
        .prev()
        .prev()
        .addClass("slick-start");
      $(".clients-slider")
        .find(".slick-center")
        .next()
        .next()
        .addClass("slick-end");
    }
  );
  // $(".clients-slider .slick-left").prev().addClass("slick-start");
  // $(".clients-slider .slick-right").next().addClass("slick-end");
  // $(".clients-slider").on(
  //   "beforeChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     $(".clients-slider")
  //       .find(".slick-left")
  //       .prev()
  //       .removeClass("slick-start");
  //     $(".clients-slider").find(".slick-right").next().removeClass("slick-end");
  //   }
  // );
  // $(".clients-slider").on(
  //   "afterChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     $(".clients-slider").find(".slick-left").prev().addClass("slick-start");
  //     $(".clients-slider").find(".slick-right").next().addClass("slick-end");
  //   }
  // );
});
