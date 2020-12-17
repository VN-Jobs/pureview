(function ($, swiper) {
    'use strict';

    var siteNavigationEl = '#site__navigation';
    var stickyHeaderPoint = 250;
    var pageHeight = window.innerHeight;
    var siteNavigation = document.querySelector(siteNavigationEl);

    /*------------- Header sticky ------------------*/
    $(siteNavigationEl).children().wrapAll( $("<div>").addClass("sticky__wrapper"));

    function checkHolderOffset() {
        return stickyHeaderPoint <= window.scrollY;
    }

    var showSticky = function() {
        siteNavigation.classList.toggle('sticking', checkHolderOffset());
    }

    function tryCheck() {
        requestAnimationFrame(showSticky);
    }

    window.addEventListener('scroll', tryCheck, false);
    window.addEventListener('resize', tryCheck, false);

    /*------------- Scroll to Top ------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > ( pageHeight * 2 )) {
            $('a#scroll-top').addClass('open');
        } else {
            $('a#scroll-top').removeClass('open');
        }
    });

    $('a#scroll-top').click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1600, 'easeInOutQuint', ( pageHeight * 2 ));

        return false;
    });

    /*------------- Home Slides ------------------*/
    var homeSlides = new swiper.Swiper('.swiper__container', {
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    /*------------- Brand Slides ------------------*/
    var brandSlides = new swiper.Swiper('.swiper__brands', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });
})(window.$, window.swiper);
