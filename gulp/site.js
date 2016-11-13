'use strict';

var gulp = require('gulp');
var path = require('path');
var _ = require('lodash');
var fs = require('fs');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

var homePage = 'about';

module.exports = function(options) {
	function markdown(dest,files,folder,env){
		return function markdown(){
			return gulp.src(files)
			.pipe($.markdown({
				highlight: function(code) {
					return require('highlight.js').highlightAuto(code).value;
				},
				header: true
			}))
			.pipe($.cheerio(function ($$, file) {
				var firstTitle = $$('h1').eq(0).text();
				if(!firstTitle) firstTitle=path.basename(file.path,path.extname(file.path));
				file.path = path.join(path.dirname(file.path),
					folder,
					firstTitle.replace(/\s+/g,'-').replace(/[\$|\.]/g,'').toLowerCase(),
					'/index'+path.extname(file.path)
				);
			}))
			// .pipe($.if(function(){
			// 	return env=='dist'
			// }, $.replace('src="images/', 'src="../src/images/')))
			.pipe(gulp.dest(options.tmp+'/site'));
		}
	}


	gulp.task('clean:site', function (done) {
		return $.del([
			options.tmp + '/site'
		],{force:true});
	});

	gulp.task('markdown:methods', gulp.series('clean:site', markdown(options.tmp+'/site',[
		'docs/methods/*.md',
	],"/docs/methods/")));

	gulp.task('markdown:prototypes', gulp.series('clean:site', markdown(options.tmp+'/site',[
		'docs/prototypes/*.md',
	],"/docs/prototypes/")));

	// gulp.task('markdown:dist', gulp.series('clean:site', markdown('dist')));

	gulp.task('markdown', gulp.series(
		'clean:site',
		gulp.parallel('markdown:methods','markdown:prototypes')
	));

};
