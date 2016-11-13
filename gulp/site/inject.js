'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var fs = require('fs');
var $ = require('gulp-load-plugins')();
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var wiredep = require('wiredep').stream;


module.exports = function(options) {

	var inject = function(dev=true){
		var wiredepOptions = {
			directory: 'bower_components',
			devDependencies: dev
		};

		return gulp.src('site/index.tpl')

			.pipe($.inject(
				gulp.src(
					[
						options.tmp + '/site/scripts/**/*.js'
					],
					{read: false}
				),
				{
					starttag: '<!-- inject:scripts:{{ext}} -->',
					ignorePath: [
						options.tmp + '/site'
					],
					addRootSlash: false
				}
			))

			.pipe($.inject(
				gulp.src(
					[
						options.tmp + '/site/styles/**/*.css'
					],
					{read: false}
				),
				{
					starttag: '<!-- inject:styles:{{ext}} -->',
					ignorePath: [
						options.tmp + '/site'
					],
					addRootSlash: false
				}
			))


			// .pipe(wiredep({
			// 	include:['bower_components/lodash/lodash.js']
			// }))
			// .pipe($.template({
			// 	date:{
			// 		day:(new Date()).getYear(),
			// 		year:(new Date()).getFullYear(),
			// 		month:(new Date()).getMonth(),
			// 	}
			// }))
			.pipe($.rename(function (path) {
				// path.extname = ".html"
				path.basename = "injected"
			}))
			.pipe(gulp.dest(options.tmp + '/site'));
	}

	gulp.task('inject:site', gulp.series(gulp.parallel('scripts:site','styles:site'), function injectDev() {
		return inject();
	}));

	// gulp.task('inject:site:dist', gulp.series(gulp.parallel('scripts','styles'), function injectDev() {
	// 	return inject(false);
	// }));
};


