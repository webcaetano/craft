'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var git = require('gulp-git');
var tag_version = require('gulp-tag-version');
// var mysqlDump = require('mysqldump');
var runSequence = require('run-sequence');
var argv = require('yargs').argv;

var $ = require('gulp-load-plugins')();


module.exports = function(options) {
	var packageSrc = './package.json';

	var bump = function(type){
		if(!type) type = 'patch'
		return gulp.src(['./bower.json',packageSrc])
		.pipe($.bump({
			version: options.version,
			type: type
		}))
		.pipe(gulp.dest('./'));
	}

	gulp.task('release',function(done){
		return runSequence('bump', 'git:commit_release','git:tag','git:push',function(){
			process.exit();
		});
	})

	gulp.task('r',['release']);

	gulp.task('git:tag', function () {
		return gulp.src(packageSrc)
		.pipe(tag_version({
			message: '[Release] %VERSION%'
		}));
	});

	gulp.task('git:push',function(done){
		return git.push('origin', 'master', {
			args: '--tags'
		},function(err){
			if(err) console.error(err);
			done();
		});
	})

	gulp.task('git:add', function () {
		return gulp.src(packageSrc)
			.pipe(git.add({args: " -A"}));
	});

	gulp.task('git:commit_release', ['git:add'], function () {
		var pkg = JSON.parse(fs.readFileSync(path.join(__dirname,'../package.json')));
		return gulp.src('./')
			.pipe(git.commit('v '+pkg.version));
	});

	gulp.task('git:commit', ['git:add'], function () {
		return gulp.src('./')
			.pipe(git.commit((argv.m && argv!==true  ?  argv.m : 'Minor changes :coffee:')));
	});

	gulp.task('p', function(){
		runSequence('git:commit','git:push',function(){
			process.exit();
		});
	});

	gulp.task('bump', function () {
		return bump(argv.major ? 'major' : (argv.minor ? 'minor' : 'patch'));
	});

	gulp.task('bump:patch', function () {
		return bump('patch');
	});

	gulp.task('bump:minor', function () {
		return bump('minor');
	});

	gulp.task('bump:major', function () {
		return bump('major');
	});

	gulp.task('patch', function (done) {
		runSequence('bump:patch','git:commit_release','git:tag','git:push',done);
	});

	gulp.task('minor', function (done) {
		runSequence('bump:minor','git:commit_release','git:tag','git:push',done);
	});

	gulp.task('major', function (done) {
		runSequence('bump:major','git:commit_release','git:tag','git:push',done);
	});
}
