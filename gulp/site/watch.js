'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(options) {
	gulp.task('fullReload:site',gulp.series('inject', function watch(done){
		browserSync.reload();
		done();
	}));

	gulp.task('watch:site', gulp.series('inject:site',gulp.parallel('scripts:site:watch'), function watch(done) {

		gulp.watch([
			'site/index.tpl',
			'site/partials/**/*.tpl',
		], gulp.series('fullReload:site'));

		gulp.watch([
			'docs/**/*.md',
		], gulp.series('docs', function watch(done){
			browserSync.reload();
			done();
		}));

		gulp.watch([
			'site/styles/**/*.less',
		]
		// ,gulp.series('styles:site',function watch(done){
		// 	browserSync.reload();
		// 	done();
		// })
		)
		.on('change',function(){
			return gulp.series('styles:site',function(done){
				browserSync.reload();
				done();
			})();
		})
		.on('add',gulp.series('fullReload:site'))
		.on('addDir',gulp.series('fullReload:site'))
		.on('unlink',gulp.series('fullReload:site'))
		.on('unlinkDir',gulp.series('fullReload:site'))

		done();
	}));
};
