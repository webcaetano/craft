'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
	gulp.task('inject', ['scripts'], function () {
		var injectScripts = gulp.src([
			options.tmp + '/serve/{app,components}/**/*.js',
		], { read: false });

		var injectOptions = {
			ignorePath: ['test/', options.tmp + '/serve'],
			addRootSlash: false
		};

		var wiredepOptions = {
			// ignorePath: /^(\.\.\/)*\.\./,
			directory: 'bower_components'
		};

		return gulp.src('test/index.html')
			// .pipe($.inject(injectStyles, injectOptions))
			.pipe($.inject(injectScripts, injectOptions))
			.pipe(wiredep(wiredepOptions))
			.pipe(gulp.dest(options.tmp + '/serve'));
	});
};
