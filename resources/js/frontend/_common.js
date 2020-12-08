(function ($, swiper, Isotope) {
    'use strict';

    var siteNavigationEl = '#site__navigation';
    var stickyHeaderPoint = 250;
    var pageHeight = window.innerHeight;
    var siteNavigation = document.querySelector(siteNavigationEl);

    function animateMouseDown(handle, bSelector, baSelector) {
        handle.on("mousedown.ba__events touchstart.ba__events", function(event) {
            handle.addClass("ba__draggable");
            bSelector.addClass("ba__resizable");

            var minSpace = 0,
                ePageX = event.pageX ? event.pageX : event.originalEvent.touches[0].pageX,
                handleWidth = handle.outerWidth(),
                posOffsetX = handle.offset().left + handleWidth - ePageX,
                baLeftOffset = baSelector.offset().left,
                baWidth = baSelector.outerWidth();

            var minLeft = baLeftOffset + minSpace;
            var maxLeft = baLeftOffset + baWidth - handleWidth - minSpace;

            handle.parents()
                .on("mousemove.ba__events touchmove.ba__events", function(e) {
                    var posX,
                        leftValue,
                        widthValue;

                    if (e.pageX) {
                        posX = e.pageX;
                    } else if (e.originalEvent.touches) {
                        posX = e.pageX || e.originalEvent.touches[0].pageX;
                    } else {
                        posX = 0;
                    }

                    leftValue = posX + posOffsetX - handleWidth;

                    if (leftValue < minLeft) {
                        leftValue = minLeft;
                    } else if (leftValue > maxLeft) {
                        leftValue = maxLeft;
                    }

                    widthValue = 100 * (leftValue + handleWidth / 2 - baLeftOffset) / baWidth + "%";

                    $(".ba__draggable").css("left", widthValue);
                    $(".ba__resizable").css("width", widthValue);
                })
                .on("mouseup.ba__events touchend.ba__events touchcancel.ba__events", function() {
                    handle.removeClass("ba__draggable");
                    bSelector.removeClass("ba__resizable");

                    $(this).off(".ba__events");
                });

            event.preventDefault();
        })
    }

    $.fn.beforeAfter = function() {
        var ba = this,
            size = this.width() + "px";

        this.find(".resize img").css("width", size);

        animateMouseDown(this.find(".handle"), this.find(".resize"), this);

        this.find(".button").on("click", function(event) {
            if ($(this).hasClass("prev")) {
                ba.find(".resize").css({
                    width: "0",
                    transition: "width 1s ease-in"
                });

                ba.find(".handle").css({
                    left: "0",
                    transition: "left 1s ease-in"
                });
            } else if ($(this).hasClass("next")) {
                ba.find(".resize").css({
                    width: "100%",
                    transition: "width 1s ease-in"
                });

                ba.find(".handle").css({
                    left: "100%",
                    transition: "left 1s ease-in"
                });
            } else {
                ba.find(".resize").css({
                    width: "50%",
                    transition: "width 1s ease-in"
                });

                ba.find(".handle").css({
                    left: "50%",
                    transition: "left 1s ease-in"
                });
            }

            setTimeout(function() {
                ba.find(".resize").css("transition", "none");
                ba.find(".handle").css("transition", "none");
            }, 1000);

            event.preventDefault();
        });

        $(window).resize(function() {
            var baWidth = ba.width() + "px";

            ba.find(".resize img").css("width", baWidth)
        })
    }

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
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    if ($('.services__gallery').length) {
        var $grid = document.querySelector('.services__gallery');
        var $isoGallery = new Isotope( $grid, {
            itemSelector: '.grid__item',
            masonry: {
                columnWidth: '.grid__sizer'
            }
        });
    }

    // $isoGallery.imagesLoaded().progress( function() {
    //     $isoGallery.isotope('layout');
    // });

    function beforeAfter() {
        if ($('.ba__container').length) {
            $('.ba__container').beforeAfter();
        }
    }

    $(window).on('load', function() {
        beforeAfter();
    });
})(window.$, window.swiper, window.Isotope);
