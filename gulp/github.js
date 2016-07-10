'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var git = require('gulp-git');
var tag_version = require('gulp-tag-version');
var argv = require('yargs').argv;

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
	var packageSrc = './package.json';

	var bump = function(type='patch'){
		return function bump(){
			return gulp.src(['./bower.json',packageSrc])
			.pipe($.bump({
				// version: options.version,
				type: type
			}))
			.pipe(gulp.dest('./'));
		}
	}

	gulp.task('git:tag', function () {
		return gulp.src(packageSrc)
		.pipe(tag_version({
			message: '[Release] %VERSION%'
		}));
	});

	gulp.task('git:push',function(done){
		return git.push('origin', 'HEAD', {
			args: '--tags'
		},function(err){
			if(err) console.error(err);
			done();
		});
	});

	gulp.task('git:add', function add() {
		return gulp.src(packageSrc)
			.pipe(git.add({args: ". -A"}));
	});

	gulp.task('git:commit_release', gulp.series('git:add', function commit_release () {
		var pkg = JSON.parse(fs.readFileSync(path.join(__dirname,'../package.json')));
		return gulp.src('./')
			.pipe(git.commit('v '+pkg.version));
	}));

	gulp.task('git:commit', gulp.series('git:add', function commit () {
		return gulp.src('./')
		.pipe(git.commit((argv.m && argv!==true  ?  argv.m : 'Minor changes :coffee:')));
	}));

	gulp.task('p', gulp.series('git:commit','git:push', function p(){
		process.exit();
	}));

	gulp.task('bump', gulp.series(bump(argv.major ? 'major' : (argv.minor ? 'minor' : 'patch'))));

	gulp.task('patch', gulp.series('build', bump('patch'), 'git:commit_release','git:tag','git:push'));
	gulp.task('minor', gulp.series('build', bump('minor'), 'git:commit_release','git:tag','git:push'));
	gulp.task('major', gulp.series('build', bump('major'), 'git:commit_release','git:tag','git:push'));
}
