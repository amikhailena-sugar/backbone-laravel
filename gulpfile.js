var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    var baseModulesPath="../../../node_modules/";
    mix.styles([
        baseModulesPath + 'bootstrap/dist/css/bootstrap.min.css'
    ], 'public/css/app.css');
    mix.scripts([
        baseModulesPath + 'jquery/dist/jquery.min.js',
        baseModulesPath + 'underscore/underscore-min.js',
        baseModulesPath + 'backbone/backbone-min.js',
        baseModulesPath + 'bootstrap/dist/js/bootstrap.min.js',
        'core.js'
    ], 'public/js/app.js');
    mix.scripts([
        'events.js',
        'model.js',
        'collection.js',
        'router.js',
        'view.js'
    ], 'public/js/tests.js');
    mix.version(['css/app.css', 'js/app.js', 'js/tests.js']);
});
