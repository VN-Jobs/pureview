(function ($, sw) {
    "use strict";

    $(document).ready(function () {
        var galleryThumbs = new sw.Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        var galleryTop = new sw.Swiper('.gallery-top', {
            spaceBetween: 10,
            simulateTouch: false,
            thumbs: {
                swiper: galleryThumbs
            }
        });
    });
})(window.$, window.swiper);
