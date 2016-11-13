'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');

var options = {
	src: 'src',
	dist: 'build',
	tmp: '.tmp',
	errorHandler: function(title) {
		return function(err) {
			gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
			this.emit('end');
		};
	}
};

_.each([
	'scripts.js',
	'inject.js',
	'build.js',
	'github.js',
	'watch.js',

	'site/markdown.js',
	'site/styles.js',
	'site/scripts.js',
	'site/inject.js',
	'site/template.js',
	'site/build.js',
	'site/watch.js',

	'server.js',
],function(file){
	require('./gulp/' + file)(options);
})

gulp.task('default', gulp.series('clean','serve'));
