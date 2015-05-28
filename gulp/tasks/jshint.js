'use strict';

var jshint = require('gulp-jshint');
var gulp   = require('gulp');


gulp.task('jshint', function() {
    return gulp.src(['./app.js','./app/**/*.js','./gulp/**/*.js','./models/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});