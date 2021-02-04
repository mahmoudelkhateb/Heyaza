// @ts-nocheck
/*global $, alert, console*/
$(document).ready(function () {
  "use strict";
  $(".team .owl-carousel").owlCarousel({
    items: 4,
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
      320: {
        items: 1,
      },
      425: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  $(".brand .owl-carousel").owlCarousel({
    items: 5,
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
      320: {
        items: 2,
      },
      375: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });



  $(".upper-ser .owl-carousel").owlCarousel({
    items: 3,
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
      320: {
        items: 1,
      },
      375: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
    },
  });


  //services active class
  //add act on hover
  $(".services .ser-content").mouseover(function () {
    $(".services .ser-content").removeClass("act");
    $(this).addClass("act");
  });
  // remove add on leave
  $(".services .ser-content").mouseleave(function () {
    $(this).removeClass("act");
  });

  $(".navbar .nav-item").mouseover(function () {
    $(".navbar .nav-item").removeClass("line");
    $(this).addClass("line");
  });

  $(".navbar .nav-item").mouseleave(function () {
    $(this).removeClass("line");
  });

  $(".projects .content").mouseover(function () {
    $(".projects .content").removeClass("opa");
    $(this).addClass("opa");
  });

  $(".projects .content").mouseleave(function () {
    $(this).removeClass("opa");
  });




  $(".slider .head").mouseover(function () {
    $(".slider .head").removeClass("animated");
    $(this).addClass("animated");
  });

  $(".slider .head").mouseleave(function () {
    $(this).removeClass("animated");
  });

  (function beboAnimate() {
    $(".slider .head").mouseover(
      $(this)
        .stop()
        .animate(
          {
            marginTop: "-" + "100px",
          },
          1000,
          function () {
            $(this).animate(
              {
                marginTop: 0,
              },
              1000,
              function () {
                beboAnimate();
              }
            );
          }
        )
    );
  })();
  $(".slider .navbar form i ").click(function () {
    $(".slider .navbar form input").fadeIn(1000);
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 500,
    autoplayHoverPause: true,
    responsiveClass: true,
  });

   //sideBar
   $(".navbar .navbar-toggler").on("click", function () {
    var fixedMenu = $(".navbar .navbar-collapse");
    $(".navbar .navbar-toggler i").toggleClass("fa-bars fa-times");
    $(".main-overlay").fadeToggle();
    fixedMenu.toggleClass("is-visible");
    if (fixedMenu.hasClass("is-visible")) {
      fixedMenu.animate(
        {
          left: 0,
        },
        500
      );
    } else {
      fixedMenu.animate(
        {
          left: "-" + "370px",
        },
        500
      );
    }
  });

  $(".main-overlay").click(function(){
    $(".navbar .navbar-toggler i").toggleClass("fa-bars fa-times");
    $(".navbar .navbar-collapse").toggleClass('is-visible');
    $(".navbar .navbar-collapse").animate(
      {
        left: "-" + "370px",
      },
      500
    );
    $(this).fadeToggle();
  })
  //navBAckground
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
      $(".navbar").addClass("background");
      $(".upper-nav").addClass("background");
    } else {
      $(".navbar").removeClass("background");
      $(".upper-nav").removeClass("background");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
      $(".navbar").css({
        top: 0,
      });
      $(".upper-nav").fadeOut();
    } else {
      $(".navbar").css({
        top: "50px",
      });
      $(".upper-nav").fadeIn();
    }
  });
});
