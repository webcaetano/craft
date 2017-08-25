'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(options) {
	gulp.task('watch', gulp.series('inject',gulp.parallel('scripts:watch','scripts:test:watch'), function watch(done) {
		gulp.watch(['test/index.html','./package.json'], gulp.series('inject', function watch(){
			browserSync.reload();
		}));
		done();
	}));
};
