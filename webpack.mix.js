const mix = require('laravel-mix');

mix.js('./colourgrab/frontend/js/app.js', './colourgrab/static/js')
    .sass('./colourgrab/frontend/sass/main.scss', './colourgrab/static/css');
