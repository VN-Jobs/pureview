const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/backend.js', 'public/assets/js')
    .js('resources/assets/js/backend/modules/user.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/category.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/post.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/slide.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/menu.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/home.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/product.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/config.js', 'public/assets/js/backend/modules')
    .js('resources/assets/js/backend/modules/pricing.js', 'public/assets/js/backend/modules')
mix.js('resources/assets/vue/dropzone.js', 'public/assets/vue/');
mix.copyDirectory('resources/assets/seeds', 'public/statics/files/seeds');
mix.copyDirectory('resources/assets/css/backend', 'public/assets/css/backend');
mix.copyDirectory('resources/assets/images/static', 'public/images/static');
mix.copy('resources/assets/bower/summernote/dist/summernote.min.js', 'public/assets/js/backend/summernote.min.js');
mix.copy('resources/assets/bower/grid-editor/dist/jquery.grideditor.min.js', 'public/assets/js/backend/grideditor.min.js');
mix.copy('resources/assets/bower/jquery-ui/jquery-ui.min.js', 'public/assets/js/backend/jquery-ui.min.js');
