'use strict';

var gulp = require('gulp');
var through = require('through2');
var path = require('path');
var _ = require('lodash');
var fs = require('fs');


var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var siteDist = 'siteDist';
	function templating(files,folder,main=false){
		var template = String(fs.readFileSync(options.tmp + '/site/injected.tpl'));

		return function tpl(){
			var menu = _.template(String(fs.readFileSync('site/partials/menu.tpl')))({
				day:13
			});

			return gulp.src(files)
			.pipe(through.obj(function (file, enc, callback) {
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
	))
	// gulp.task('docs:methods', gulp.series('clean:docs', markdown(options.tmp+'/site',[
	// 	'docs/methods/*.md',
	// ],"/docs/methods/")));

	// gulp.task('docs:prototypes', gulp.series('clean:docs', markdown(options.tmp+'/site',[
	// 	'docs/prototypes/*.md',
	// ],"/docs/prototypes/")));

	// // gulp.task('docs:dist', gulp.series('clean:site', docs('dist')));

	// gulp.task('docs', gulp.series(
	// 	'clean:docs',
	// 	gulp.parallel('docs:methods','docs:prototypes')
	// ));

};
