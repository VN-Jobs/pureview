const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Copy vendor and static resources.
mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('node_modules/line-awesome/dist/font-awesome-line-awesome/webfonts', 'public/css/webfonts');
mix.copyDirectory('node_modules/line-awesome/dist/line-awesome/fonts', 'public/css/fonts');

mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('postcss-css-variables')(),
            require('tailwindcss')('tailwind.config.js'),
            require('autoprefixer'),
        ]
    });

mix.js('resources/js/app.js', 'public/js')
    .extract([
        /* - Auth and other page - Extract packages from node_modules to vendor.js */
        'jquery',
    ], 'public/js/vendor');

if (process.env.side) {
    require(`${__dirname}/webpack.mix.${process.env.side}.js`);
} else {
    // require(`${__dirname}/webpack.mix.backend.js`);
    require(`${__dirname}/webpack.mix.frontend.js`);
}

if (mix.inProduction()) {
    mix.disableNotifications();
    mix.version()
        .options({
            // optimize js minification process
            terser: {
                cache: true,
                parallel: true,
                sourceMap: true
            }
        });
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({ devtool: 'inline-source-map' }).sourceMaps();
}
