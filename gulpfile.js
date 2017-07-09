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
	'build.js',
	'github.js',
],function(file){
	require('./gulp/' + file)(options);
})

gulp.task('default', gulp.series('build'));
gulp.task('serve', gulp.series('scripts:watch'));
