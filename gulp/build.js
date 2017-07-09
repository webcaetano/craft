'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	gulp.task('build:js', gulp.series('scripts', function buildDependent() {
		return gulp.src(options.tmp + '/serve/app/index.js')
			.pipe($.rename(function (path) {
				path.basename = "craft"
			}))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	}));

	gulp.task('mincopy:js', function () {
		return gulp.src(options.dist + '/*.js')
			.pipe($.uglify())
			.pipe($.rename(function (path) {
				path.extname = ".min.js"
			}))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	});

	gulp.task('clean', function () {
		return $.del([options.tmp + '/']);
	});

	gulp.task('clean:dist', function () {
		return $.del([options.dist + '/']);
	});

	gulp.task('build',gulp.series('clean','clean:dist','build:js','mincopy:js'));
};
