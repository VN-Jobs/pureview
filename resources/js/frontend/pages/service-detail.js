(function ($, slick) {
    "use strict";

    function animateMouseDown(handle, bSelector, baSelector) {
        handle.on("mousedown.ba__events touchstart.ba__events", function(event) {
            handle.addClass("ba__draggable");
            bSelector.addClass("ba__resizable");

            console.log("move");

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
                    transition: "width 1s ease"
                });

                ba.find(".handle").css({
                    left: "0",
                    transition: "left 1s ease"
                });
            } else if ($(this).hasClass("next")) {
                ba.find(".resize").css({
                    width: "100%",
                    transition: "width 1s ease"
                });

                ba.find(".handle").css({
                    left: "100%",
                    transition: "left 1s ease"
                });
            } else {
                ba.find(".resize").css({
                    width: "50%",
                    transition: "width 1s ease"
                });

                ba.find(".handle").css({
                    left: "50%",
                    transition: "left 1s ease"
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

            ba.find(".resize img").css("width", baWidth);
        })
    }

    function beforeAfter() {
        if ($('.ba__container').length) {
            $('.ba__container').each(function () {
                $(this).beforeAfter();
            });
        }
    }

    $(window).on("load", function() {
        beforeAfter();
    });

    $(document).ready(function () {
        var galleryTopEl = '.gallery-top';
        var galleryThumbsEl = '.gallery-thumbs';

        $(galleryTopEl).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            draggable: false,
            asNavFor: galleryThumbsEl,
            prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left la-1x"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right la-1x"></i></button>',
        });

        $(galleryThumbsEl).slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 300,
            asNavFor: galleryTopEl,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    });
})(window.$, window.slick);
