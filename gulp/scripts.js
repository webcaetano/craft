'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var fs = require('fs');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
	function wp(dependent, umd, src, dist, watch=null, callback=null, reload=null) {
		var webpackOptions = {
			watch: watch,
			cache: watch,
			module: {
				loaders: [
					{ test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
					{ test: /\.json$/, exclude: /node_modules/, loader: 'json'}
				]
			},
			plugins:[
				function(){
					this.plugin("done", function(stats){
						if (stats.compilation.errors && stats.compilation.errors.length)gutil.beep();
					});
				},
				new $.webpack.webpack.DefinePlugin({
					__DEPENDENT__:dependent
				})
			],
			externals: JSON.parse(fs.readFileSync('./bower.json','utf8')).externals,
			output: { filename: 'index.js' }
		};

		if(umd){
			webpackOptions.output = {
				library:'craft',
				filename: 'index.js',
				libraryTarget:'umd'
			}
		}

		if(watch) webpackOptions.devtool = 'inline-source-map';

		var webpackChangeHandler = function(err, stats) {
			if(err) {
				options.errorHandler('WEBPACK')(err);
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

		return gulp.src(src)
			.pipe($.webpack(webpackOptions, null, webpackChangeHandler))
			.pipe(gulp.dest(dist))
	}

	gulp.task('scripts', function () {
		return wp(false, true, options.src + '/index.js',options.tmp + '/serve/app', false);
	});

	gulp.task('scripts:dependent', function () {
		return wp(true, true, options.src + '/index.js',options.tmp + '/serve/app', false);
	});

	gulp.task('scripts:watch', function (callback) {
		return wp(false, true, options.src + '/index.js',options.tmp + '/serve/app', true, callback, true);
	});

	gulp.task('scripts:test', function () {
		return wp(false, false, 'test/app/index.js',options.tmp + '/serve/test', false);
	});

	gulp.task('scripts:test:watch', function (callback) {
		return wp(false, false, 'test/app/index.js',options.tmp + '/serve/test', true, callback, true);
	});
};

