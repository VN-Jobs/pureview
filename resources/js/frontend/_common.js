(function ($, swiper, Isotope) {
    'use strict';

    var pageHeight = window.innerHeight;

    var homeSlides = new swiper.Swiper('.swiper__container', {
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var brandSlides = new swiper.Swiper('.swiper__brands', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // $('.services__gallery').isotope({
    //     // set itemSelector so .grid-sizer is not used in layout
    //     itemSelector: '.grid__item',
    //     percentPosition: true,
    //     masonry: {
    //         // use element for option
    //         columnWidth: '.grid-sizer'
    //     }
    // })

    if ($('.services__gallery').length) {
        var $grid = document.querySelector('.services__gallery');
        var $isoGallery = new Isotope( $grid, {
            // options...
            itemSelector: '.grid__item',
            masonry: {
                columnWidth: '.grid__sizer'
            }
        });
    }

    // $isoGallery.imagesLoaded().progress( function() {
    //     $isoGallery.isotope('layout');
    // });
    //

    // Scroll to Top
    // $('#app').append('<a href=\"#top\" id=\"scroll-top\"><i class=\"las la-angle-up\"></i></a>');

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > ( pageHeight * 2 )) {
    //         $('a#scroll-top').addClass('open');
    //     } else {
    //         $('a#scroll-top').removeClass('open');
    //     }
    // });

    // $('a#scroll-top').click(function(event) {
    //     event.preventDefault();

    //     $("html,body").animate({  scrollTop: 0 }, 1600, 'easeInOutQuint', ( pageHeight * 2 ));

    //     return false;
    // });
//
})(window.$, window.swiper, window.Isotope);
