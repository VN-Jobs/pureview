const mix = require('laravel-mix');

mix.sass('resources/sass/frontend/app.scss', 'public/css/frontend')
    .options({
        processCssUrls: false,
        postCss: [
            require('postcss-css-variables')(),
            require('tailwindcss')('tailwind.config.js'),
        ]
    });

mix.js('resources/js/frontend/app.js', 'public/js/frontend')
    .extract([
        /* - Frontend - Extract packages from node_modules to frontend/vendor.js */
        'alpinejs',
        'lodash',
        'jquery',
        'swiper',
        'isotope-layout',
        'imagesloaded',
        'video.js',
        'videojs-plus'
    ], 'public/js/frontend/vendor');

// Vanilla JS: lang
mix.scripts('resources/js/frontend/lang/en.js', 'public/js/frontend/lang/en.js');

// Vanilla JS: pages
mix.scripts('resources/js/frontend/pages/home.js', 'public/js/frontend/pages/home.js');
