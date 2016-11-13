'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var dist = 'siteDist';
	gulp.task('html:site', gulp.series('inject:site','docs', function () {
		return gulp.src(options.tmp + '/site/index.html')
			.pipe($.useref())
			.pipe($.if('*.html', $.replace('bower_components', '../bower_components')))
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			.pipe($.if('*.css', $.cssmin()))
			.pipe(gulp.dest(dist+'/'))
			.pipe($.size({ title: dist+'/', showFiles: true }));
	}));

	// gulp.task('other', function () {
	// 	return gulp.src([
	// 		// options.src + '/favicon.ico',
	// 	])
	// 	.pipe(gulp.dest(options.dist + '/'));
	// });

	gulp.task('clean:site', function (done) {
		return $.del([
			dist+'/',
			options.tmp + '/site/'
		],{force:true});
	});

	gulp.task('build:site', gulp.series(
		'clean:site',
		gulp.parallel(
			'html:site'
			// 'other'
		)
	));

	// gulp.task('deploy', gulp.series('build','p'))
};
