'use strict';

var gulp = require('gulp');
var exec = require('sync-exec');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var dist = 'siteDist';
	gulp.task('html:site', gulp.series('inject:site','docs', function () {
		return gulp.src(options.tmp + '/site/index.html')
			.pipe($.useref())
			.pipe($.if('*.html', $.replace('bower_components', '../bower_components')))
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
	gulp.task('clean:siteDist', function (done) {
		return $.del([
			dist+'/',
			// options.tmp + '/site/'
		],{force:true});
	});

	gulp.task('build:site', gulp.series(
		'clean:siteDist',
		gulp.parallel(
			'html:site'
			// 'other'
		)
	));

	gulp.task('deploy:site',function(done){
		var c = [
			'cd '+dist,
			'git init',
			'git add .',
			'git commit -m "Deploy to Github Pages"',
			'git push --force git@github.com:webcaetano/craft.git master:gh-pages' // change adress to you repo
		].join(" && ")
		console.log(exec(c));
		done();
	});

	gulp.task('deploy:site:build',gulp.series('build:site','deploy:site'))
};
