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

mix.js(['resources/js/app.js','resources/js/welcome.js'], 'public/js/app.js').vue({version:2})
mix.js(['resources/js/project.js'], 'public/js/project.js').vue({version:2})
mix.js(['resources/js/project-v2.js'], 'public/js/project-v2.js').vue({version:2})
mix.js(['resources/js/index.js'], 'public/js/index.js').vue({version:2})
mix.postCss('resources/css/app.css', 'public/css')
mix.sass('node_modules/bulma/bulma.sass','public/css')
mix.styles(['public/css/bulma.css','public/css/app.css'], 'public/css/all-files.css');
