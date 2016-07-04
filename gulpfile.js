'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
minify = require('gulp-minify'),
concat = require('gulp-concat'),
livereload = require('gulp-livereload'),
gulpBowerFiles = require('gulp-bower-files'),
jasmine = require('gulp-jasmine'),
Server = require('karma').Server;

gulp.task('entry', function () {
    return gulp.src('./src/*.html')
        .pipe(livereload({ start: true }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('templates', function () {
    return gulp.src('./src/templates/*.html')
        .pipe(livereload({ start: true }))
        .pipe(gulp.dest('./dist/templates'))
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload({ start: true }));
});

gulp.task('bootstrap-css', function () {
    return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css.map'],
        {base: 'bower_components/'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload({ start: true }));
});

gulp.task('js',function(){
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('build.js'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload({ start: true }));
})

gulp.task("bower-files", function(){
    return gulp.src(['bower_components/angular/angular.min.js',
        'bower_components/angular/angular.min.js.map',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-route/angular-route.min.js.map',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery/dist/jquery.min.js'],
        {base: 'bower_components/'})
        .pipe(gulp.dest('./dist/lib'))
});

gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['entry']);
    gulp.watch('./src/templates/*.html', ['templates']);
    gulp.watch('./src/sass/*.scss', ['sass','bootstrap-css']);
    gulp.watch('./src/js/**/*.js', ['js','bower-files']);
});

/**
 * Run test once and exit
 */
gulp.task('unit-tests', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


gulp.task('default', ['entry', 'templates', 'sass', 'bootstrap-css','js','bower-files']);