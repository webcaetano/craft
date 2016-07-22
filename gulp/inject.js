'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
	gulp.task('inject', gulp.series('scripts','scripts:test', function inject() {
		// var wiredepOptions = {
		// 	// ignorePath: /^(\.\.\/)*\.\./,
		// 	directory: 'bower_components'
		// };

		return gulp.src('test/*.html')
			.pipe($.inject(
				gulp.src(
					[
						options.tmp + '/serve/app/**/*.js'
					],
					{read: false}
				),
				{
					starttag: '<!-- inject:craft:{{ext}} -->',
					ignorePath: ['test/', options.tmp + '/serve'],
					addRootSlash: false
				}
			))

			.pipe($.inject(
				gulp.src(
					[
						options.tmp + '/serve/test/**/*.js'
					],
					{read: false}
				),
				{
					starttag: '<!-- inject:test:{{ext}} -->',
					ignorePath: ['test/', options.tmp + '/serve'],
					addRootSlash: false
				}
			))
			// .pipe(wiredep(wiredepOptions))
			.pipe(gulp.dest(options.tmp + '/serve'));
	}));
};


