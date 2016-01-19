'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require('fs');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
	function webpack(watch, callback, reload) {
		if(!callback) callback = null;
		if(!reload) reload = null;
		var webpackOptions = {
			watch: watch,
			module: {
				// preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}],
				loaders: [
					{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
					{ test: /\.json$/, exclude: /node_modules/, loader: 'json'}
				]
			},
			externals: JSON.parse(fs.readFileSync('./bower.json','utf8')).externals,
			output: { filename: 'index.js' }
		};

		if(watch) {
			webpackOptions.devtool = 'inline-source-map';
		}

		var webpackChangeHandler = function(err, stats) {
			if(err) {
				options.errorHandler('Webpack')(err);
			}
			$.util.log(stats.toString({
				colors: $.util.colors.supportsColor,
				chunks: false,
				hash: false,
				version: false
			}));
			if(reload) browserSync.reload();
			if(watch) {
				watch = false;
				callback();
			}
		};

		return gulp.src(options.src + '/app/index.js')
			.pipe($.webpack(webpackOptions, null, webpackChangeHandler))
			.pipe(gulp.dest(options.tmp + '/serve/app'));
	}

	gulp.task('scripts', function () {
		return webpack(false);
	});

	gulp.task('scripts:watch', function (callback) {
		return webpack(true, callback, true);
	});
};


