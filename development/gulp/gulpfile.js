var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	merge = require('merge-stream'),
	minify = require('gulp-minify'),
	minifyCSS = require('gulp-clean-css'),
	sass = require('gulp-sass');

//Placeholder array
var fileList = ["../ajax","../css/*","../js"];

gulp.task('sass', function () {
  gulp.src('../css/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('../css'));
});

gulp.task('scripty', function() {
  gulp.src('../js/scripty.js')
    .pipe(minify())
    .pipe(gulp.dest('../js'))
});

gulp.task('massiveMerge', function() {
   var ajax = gulp.src('../ajax/*')
		.pipe(gulp.dest('../../production/ajax'));
   var css = gulp.src('../css/*')
		.pipe(gulp.dest('../../production/css'));
   var javascript = gulp.src('../js/*')
		.pipe(gulp.dest('../../production/js'));
   var index = gulp.src('../index.html')
		.pipe(gulp.dest('../../production'));
   var img = gulp.src('../img/*')
		.pipe(gulp.dest('../../production/img'));
   return merge(ajax, css, javascript, index, img);
});