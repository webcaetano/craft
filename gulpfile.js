'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var wrench = require('wrench');

var options = {
	src: 'src',
	dist: 'build',
	tmp: '.tmp',
	e2e: 'e2e',
	errorHandler: function(title) {
		return function(err) {
			gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
			this.emit('end');
		};
	}
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
	return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
	if(file.match(/templates\\/g)) return;
	require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
	gulp.start('serve');
});
