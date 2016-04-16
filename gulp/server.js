'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var util = require('util');
var cp = require('child_process');


module.exports = function(options) {

	function browserSyncInit(baseDir, browser) {
		browser = browser === undefined ? 'default' : browser;

		var routes = null;
		if(baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
			routes = {
				'/bower_components': 'bower_components'
			};
		}

		var server = {
			baseDir: baseDir,
			routes: routes
		};

		browserSync.instance = browserSync.init({
			startPath: '/',
			server: server,
			browser: browser,
			notify: false,
			open: false
		});
	}

	gulp.task('serve', ['watch'], function () {
		browserSyncInit([options.tmp + '/serve', options.src, 'test']);
	});

	gulp.task('serve:dist', ['build:examples'], function () {
		browserSyncInit('examples/');
	});
};
