'use strict';

var gulp = require('gulp');
var through = require('through2');
var path = require('path');
var _ = require('lodash');
var glob = require('glob');
var fs = require('fs');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var siteDist = 'siteDist';

	var protoSetup = require('./../../src/setup');

	var methods = _.map(glob.sync('src/methods/*.js'),function(file){
		var p = path.parse(file)
		return p.name;
	});
	var prototypes = _.map(glob.sync('src/prototypes/*.js'),function(file){
		var p = path.parse(file)
		return p.name;
	});

	function templating(files,folder,main=false){
		var template = String(fs.readFileSync(options.tmp + '/site/injected.tpl'));

		return function tpl(){
			return gulp.src(files)
			.pipe(through.obj(function (file, enc, callback) {
				var pathData = path.parse(file.path);
				var folders = pathData.dir.split('/');
				var lastFolder = _.last(folders);

				var menu = _.template(String(fs.readFileSync('site/partials/menu.tpl')))({
					name:lastFolder
				});

				var content = _.template(String(file.contents))({
				});

				var newContent = _.template(template)({
					content,
					menu,
				});
				file.contents = new Buffer(newContent);

				callback(null,file);
			}))
			.pipe($.rename(function (path) {
				path.extname = ".html"
				if(main) path.basename = "index"
			}))
			.pipe(gulp.dest(folder));
		}
	}


	gulp.task('clean:siteTmp', function (done) {
		return $.del([
			// dist+'/',
			options.tmp + '/site/'
		],{force:true});
	});


	gulp.task('template:methods',gulp.series(templating(
		options.tmp + '/site/docs/methods/**/*.html',
		options.tmp + '/site/docs/methods/'
	)))

	gulp.task('template:prototypes',gulp.series(templating(
		options.tmp + '/site/docs/prototypes/**/*.html',
		options.tmp + '/site/docs/prototypes/'
	)))

	gulp.task('template:mainPage',gulp.series(templating(
		options.tmp + '/site/partials/main.html',
		options.tmp + '/site/',
		true
	)))

	gulp.task('template',gulp.series(
		'clean:siteTmp',
		'inject:site',
		'markdown',
		'template:mainPage',
		'template:methods',
		'template:prototypes'
	));
};
