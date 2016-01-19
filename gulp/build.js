'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var exec = require('sync-exec');
var surge = require('gulp-surge');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(options) {
	gulp.task('html', ['inject'], function () {
		var assets;
		return gulp.src(options.tmp + '/serve/*.html')
			.pipe(assets = $.useref.assets())
			.pipe($.rev())
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			.pipe($.if('*.css', $.csso()))
			.pipe(assets.restore())
			.pipe($.useref())
			.pipe($.revReplace())
			.pipe($.if('*.html', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.html', $.minifyHtml({empty: true,	spare: true, quotes: true, conditionals: true})))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	});

	gulp.task('images:dist',function(){
		return gulp.src([
			options.src + '/images/**/*'
		],{ base: './src' })
		.pipe(imagemin({
			use: [pngquant({quality: '75-90'})]
		}))
		.pipe(gulp.dest(options.dist + '/'));
	})

	gulp.task('other', function () {
		return gulp.src([
			options.src + '/favicon.ico',
			options.src + '/404.html',
			options.src + '/audio/**/*'
		],{ base: './src' })
		.pipe(gulp.dest(options.dist + '/'));
	});

	gulp.task('rest', function (done) {
		$.del([
			options.dist + '/app',
		], done);
	});

	gulp.task('clean', function (done) {
		$.del([options.dist + '/', options.tmp + '/'], done);
	});


	gulp.task('prepare',function(done){
		runSequence('clean','images:dist','other',done);
	});

	gulp.task('build',function(done){
		runSequence('clean','prepare','html','rest',done);
	});

	gulp.task('deploy',function(done){
		var c = [
			'cd dist',
			'git init',
			'git add .',
			'git commit -m "Deploy to Github Pages"',
			'git push --force git@github.com:webcaetano/phaser-boilerplate.git master:gh-pages' // change adress to you repo
		].join(" && ")
		console.log(exec(c));
		done();
	})

	gulp.task('deploy:build',function(done){
		runSequence('build','d',done)
	});

	gulp.task('surge:build',function(done){
		runSequence('build','surge',done)
	});

	gulp.task('surge', function () {
		return surge({
			project: './dist',         // Path to your static build directory
			domain: 'phaser-boilerplate.surge.sh'  // Your domain or Surge subdomain
		})
	});
};
