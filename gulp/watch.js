'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

module.exports = function(options) {
	gulp.task('watch', function (done) {
		runSequence('inject',['scripts:watch','scripts:test:watch'],function(){
			gulp.watch(['test/index.html','./bower.json'], function(event) {
				gulp.start('inject',function(){
					browserSync.reload();
				});
			});

			done();
		});
	});
};
