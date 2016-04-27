'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require('fs');
var webpack = require('webpack');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

var gulpWebpack = require('webpack-stream');

module.exports = function(options) {

	gulp.task('include', function () {
		return gulp.src(options.tmp + '/serve/app/index.js',{path:'src/'})
		.pipe($.include())
		.pipe(gulp.dest(options.tmp + '/serve/app/'));
	});

	function wp(dependent, umd, src, dist, watch, callback, reload) {
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
			plugins: [
				new webpack.DefinePlugin({
					WEBPACK_DEPENDENT:dependent
				})
			],
			externals: JSON.parse(fs.readFileSync('./bower.json','utf8')).externals,
			output: { filename: 'index.js' }
		};

		if(umd){
			webpackOptions.output = {
				library:'$craft',
				filename: 'index.js',
				libraryTarget:'umd'
			}
		}

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
				version: true
			}));
			// browserSync.reload();
			if(reload) {
				browserSync.reload();
			}
			if(watch) {
				watch = false;
				callback();
			}
		};

		return gulp.src(src)
		.pipe(gulpWebpack(webpackOptions, null, webpackChangeHandler))
		.on('error', function handleError() {
			this.emit('end'); // Recover from errors
		})
		.pipe(gulp.dest(dist));


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


