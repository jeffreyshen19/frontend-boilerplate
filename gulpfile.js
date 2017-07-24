var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var minify = require('gulp-minify');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('default', ['webserver', 'sass', 'compressjs', 'imagemin', 'lint', 'compresspug'], function() {
  gulp.watch('src/SCSS/*.scss', ['sass']);
  gulp.watch('src/views/*.pug', ['compresspug']);
  gulp.watch('src/*.js', ['compressjs']);
});

gulp.task('compresspug', function buildHTML() {
  return gulp.src('src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'))
    .on("error", notify.onError(function (error) {
        return "Error: " + error.message;
    }));
});

gulp.task('lint', function() {
  return gulp.src('src/JS/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .on("error", notify.onError(function (error) {
        return "Error: " + error.message;
    }));;
});

gulp.task('imagemin', function () {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .on("error", notify.onError(function (error) {
        return "Error: " + error.message;
    }));;
});

gulp.task('sass', function () {
  return gulp.src('src/SCSS/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/CSS'))
    .on("error", notify.onError(function (error) {
        return "Error: " + error.message;
    }));;
});

gulp.task('compressjs', function() {
  gulp.src('src/JS/*.js')
    .pipe(minify({}))
    .pipe(gulp.dest('dist/JS'))
    .on("error", notify.onError(function (error) {
        return "Error: " + error.message;
    }));;
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
