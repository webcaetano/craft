'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var exec = require('sync-exec');
var surge = require('gulp-surge');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(options) {
	gulp.task('build:js',['scripts'], function () {
		return gulp.src(options.tmp + '/serve/app/index.js')
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	});


	gulp.task('mincopy:js', function () {
		return gulp.src(options.tmp + '/serve/app/index.js')
			.pipe($.uglify())
			.pipe($.rename(function (path) {
				path.extname = ".min.js"
			}))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	});

	gulp.task('clean', function (done) {
		$.del([options.dist + '/', options.tmp + '/'], done);
	});

	gulp.task('build',function(done){
		runSequence('clean','build:js','mincopy:js',done);
	});
};
