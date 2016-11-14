'use strict';

var gulp = require('gulp');
var exec = require('sync-exec');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var dist = 'siteDist';
	gulp.task('html:site', gulp.series('inject:site',function () {
		return gulp.src(options.tmp + '/site/injected.tpl')
			.pipe($.useref())
			.pipe($.if('*.html', $.replace('bower_components', '../bower_components')))
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			.pipe($.if('*.css', $.cssmin()))
			.pipe($.if('*.js',gulp.dest(dist+'/')))
			.pipe(gulp.dest(dist+'/'))
			.pipe($.size({ title: dist+'/', showFiles: true }));
	},'template:dist'));

	gulp.task('copy:docs', function () {
		return gulp.src([
			// options.src + '/favicon.ico',
			options.tmp + '/site/docs/**/*.html',
		])
		.pipe(gulp.dest('siteDist/docs'));
	});

	gulp.task('clean:siteDist', function (done) {
		return $.del([
			dist+'/',
			// options.tmp + '/site/'
		],{force:true});
	});

	gulp.task('clean:tpl:dist', function (done) {
		return $.del([
			dist+'/**/*.tpl',
		],{force:true});
	});

	gulp.task('build:site', gulp.series(
		'clean:siteDist',
		gulp.parallel(
			'html:site'
			// 'other'
		),
		'clean:tpl:dist'
		// 'copy:docs'
	));

	gulp.task('deploy:site',gulp.series('build:site',function(done){
		var c = [
			'cd '+dist,
			'git init',
			'git add .',
			'git commit -m "Deploy to Github Pages"',
			'git push --force git@github.com:webcaetano/craft.git master:gh-pages' // change adress to you repo
		].join(" && ")
		console.log(exec(c));
		done();
	}));

	// gulp.task('deploy:site:build',gulp.series('build:site','deploy:site'))
};
