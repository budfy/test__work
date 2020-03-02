$(function () {
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    fade: true
  });

  // $(window).resize(function () {
  //   $('.slider__inner').slick('reinit');
  // });

  // $(window).on('orientationchange', function () {
  //   $('.slider__inner').slick('reinit');
  // });

  $('.popular__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
        breakpoint: 1621,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 840,
        settings: "unslick"
      }
    ]
  });

  // $(window).resize(function () {
  //   $('.popular__slider').slick('reinit');
  // });

  $(function () {
    $(".up-arrow").hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $(".up-arrow").fadeIn();
      } else {
        $(".up-arrow").fadeOut();
      }
    });

    $(".up-arrow").click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});