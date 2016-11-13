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
	function templating(dest){
		var template = String(fs.readFileSync(options.tmp + '/site/injected.tpl'));

		return function tpl(){
			var menu = _.template(String(fs.readFileSync('site/partials/menu.tpl')))({
				day:13
			});

			return gulp.src(options.tmp + '/site/docs/methods/**/*.html')
			.pipe(through.obj(function (file, enc, callback) {
				var content = String(file.contents);

				var newContent = _.template(template)({
					content,
					menu,
				});
				console.log(newContent)
				file.contents = new Buffer(newContent);
				callback(null,file);
			}))
			.pipe(gulp.dest(options.tmp + '/site/docs/methods/'));
		}
	}


	gulp.task('template',gulp.series('docs',templating()))
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
