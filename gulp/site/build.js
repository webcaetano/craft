'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	gulp.task('html', gulp.series('inject','markdown:dist', function () {
		return gulp.src(options.tmp + '/serve/index.html')
			.pipe($.useref())
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			.pipe($.if('*.css', $.cssmin()))
			.pipe($.if('*.css', $.replace('../images/', '../src/images/')))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	}));

	gulp.task('other', function () {
		return gulp.src([
			options.src + '/favicon.ico',
		])
		.pipe(gulp.dest(options.dist + '/'));
	});

	gulp.task('clean', function (done) {
		return $.del([
			options.dist + '/scripts',
			options.dist + '/styles',
			options.dist + '/posts',
			options.tmp + '/'
		],{force:true});
	});

	gulp.task('build', gulp.series('clean',gulp.parallel('html', 'other'),'posts:dist'));

	gulp.task('deploy', gulp.series('build','p'))
};
