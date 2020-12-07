const mix = require('laravel-mix');

mix.sass('resources/sass/backend/app.scss', 'public/css/backend');

mix.js('resources/js/backend/app.js', 'public/js/backend')
    .extract([
        /* - Backend - Extract packages from node_modules to backend/vendor.js */
        'jquery',
        'lodash'
    ], 'public/js/backend/vendor');
