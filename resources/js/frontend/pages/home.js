(function ($, sw) {
    "use strict";

    $(document).ready(function () {
        var swiper = new sw.Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
})(window.$, window.swiper);
