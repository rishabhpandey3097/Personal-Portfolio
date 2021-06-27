/*global $, jQuery, alert*/
$(document).ready(function () {
  "use strict";

  // let button = document.querySelector('.theme-toggle-btn')

  // // press the button to toggle the .dark-mode class
  // button.addEventListener('click', () => {
  //   document.documentElement.classList.toggle('dark-mode')

  //   document.querySelectorAll('inverted').forEach((result) => {
  //     result.classList.toggle('invert');
  //   })

  //   document.querySelectorAll('img').forEach((result) => {
  //     result.classList.toggle('invert');
  //   })

  //   document.querySelectorAll('.home').forEach((result) => {
  //     result.classList.toggle('invert');
  //   })
  // })

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
      if ($(window).width() < 768) {
        $(".nav-menu").slideUp();
      }
    });

    $(this).addClass("active");

    var target = this.hash,
      menu = target;

    target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80,
        },
        500,
        "swing",
        function () {
          window.location.hash = menu;
          $(document).on("scroll", onScroll);
        }
      );
  });

  function onScroll(event) {
    if ($(".home").length) {
      var scrollPos = $(document).scrollTop();
      $("nav ul li a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  Scroll To Top
  // ========================================================================= //

  //Get the button
  var scrollToTop = document.getElementById("scrollTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  }

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["Rishabh.", "A Developer.", "Creative."],
      typeSpeed: 10,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel Testimonial
  // ========================================================================= //
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    autoplayTimeout: 12000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      900: {
        items: 1,
      },
    },
  });
});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-thumbnail",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({
      filter: $(this).data("filter"),
    });
  });
});

$(".flip").hover(function () {
  $(this).find(".card").toggleClass("flipped");
});

// ========================================================================= //
//  Porfolio Flip Box
// ========================================================================= //

$(window).load(function () {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 786) {
      $(".toggleFlipBox").removeClass("flip");
    } else if (ww >= 786) {
      $(".toggleFlipBox").addClass("flip");
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  $(document).load(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

// ========================================================================= //
//  Collapse Navbar
// ========================================================================= //
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).mouseup(function (e) {
  var container = $("mySidenav");
  document.getElementById("mySidenav").style.width = "0";
});

// ========================================================================= //
//  Transparent Header Effect
// ========================================================================= //

$(document).ready(function () {
  var singlePost = document.getElementsByClassName("single-blog").length;
  var post = document.getElementsByClassName("post").length;

  if (singlePost >= 1 || post >= 1) {
    $(".nav").css("background", "rgb(51 51 51)");
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (singlePost == 0 && post <= 0) {
      if (scroll > 100) {
        $(".nav").css("background", "white");
        $(".nav").addClass("translucent");
        document.getElementById("logo-light").style.display = "none";
        document.getElementById("logo-dark").style.display = "block";
      } else {
        $(".nav").css("background", "transparent");
        $(".nav").removeClass("translucent");
        document.getElementById("logo-light").style.display = "block";
        document.getElementById("logo-dark").style.display = "none";
      }
    }
  });
});
