'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
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

	gulp.task('copy:scripts:examples', function () {
		return gulp.src(options.tmp+'/serve/**/*.js')
		.pipe(gulp.dest('examples/'))
	});

	gulp.task('copy:others:examples', function () {
		return gulp.src('test/**/*.{ico,png,jpg}')
		.pipe(gulp.dest('examples/'))
	});

	gulp.task('html:examples', gulp.series('inject', function () {
		var assets;
		return gulp.src(options.tmp + '/serve/*.html')
			.pipe(assets = $.useref.assets())
			.pipe($.rev())
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			.pipe(assets.restore())
			.pipe($.useref())
			.pipe($.revReplace())
			.pipe($.if('*.html', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.html', $.minifyHtml({empty: true,	spare: true, quotes: true, conditionals: true})))
			.pipe(gulp.dest('examples/'))
			.pipe($.size({ title: 'examples/', showFiles: true }));
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

	gulp.task('clean:examples', function () {
		return $.del(['examples/', options.tmp + '/']);
	});

	gulp.task('build',gulp.series('clean','clean:dist','build:js','mincopy:js'));
	gulp.task('build:examples', gulp.series('clean','clean:examples','html:examples','copy:scripts:examples','copy:others:examples'));

};
