'use strict';

var gulp = require('gulp');
var through = require('through2');
var path = require('path');
var _ = require('lodash');
var glob = require('glob');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync(path.join(__dirname,'../../package.json')));

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var siteDist = 'siteDist';

	var methodsProtos = {
		circle:'graphic',
		dot:'graphic',
		graphic:'graphic',
		rect:'graphic',
		group:'group',
		sprite:'sprite',
		stroke:'sprite',
		shape:'sprite',
		tileSprite:'sprite',
		text:'text',
	}

	var protoSetup = require('./../../src/setup');

	var methods = _.map(glob.sync('src/methods/*.js'),function(file){
		var p = path.parse(file)
		return p.name;
	});
	var prototypes = _.map(glob.sync('src/prototypes/*.js'),function(file){
		var p = path.parse(file)
		return p.name;
	});

	function templating(files,folder,templateDir,main=false){
		return function tpl(){
			var template = String(fs.readFileSync(templateDir));
			var footer = _.template(String(fs.readFileSync('site/partials/footer.tpl')))({
				version:pkg.version,
			});

			return gulp.src(files)
			.pipe(through.obj(function (file, enc, callback) {
				var pathData = path.parse(file.path);
				var folders = pathData.dir.split('/');
				var lastFolder = _.last(folders);

				if(_.nth(folders,-2)=='methods'){
					var protosList = _.map(_.keys(protoSetup[methodsProtos[lastFolder]]),function(val,i){
						return val.replace(/\$/g,'');
					});

					var protosTpl = _.template(String(fs.readFileSync('site/partials/protoList.tpl')))({
						protosList,
					});
				} else {
					var protosTpl = ''
				}


				var menu = _.template(String(fs.readFileSync('site/partials/menu.tpl')))({
					methods,
					prototypes,
					version:pkg.version,
					home:main,
					name:lastFolder,
				});

				var content = _.template(String(file.contents)
				.replace(/<!-- protosTpl -->/g,"<%=protosTpl%>"))({
					protosTpl:protosTpl
				});

				var newContent = _.template(template)({
					content,
					menu,
					footer,
					version:pkg.version,
				});
					protoSetup,
				file.contents = new Buffer(newContent);

				callback(null,file);
			}))
			.pipe($.if(main, $.replace('<base href="../../../">', '')))
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

	_.each([
		{
			dest:'siteDist',
			name:':dist',
			template:'siteDist/injected.tpl'
		},
		{
			dest:options.tmp + '/site',
			name:'',
			template:options.tmp + '/site/injected.tpl'
		},
	],function(val,i){
		gulp.task('template:methods'+val.name,gulp.series(templating(
			options.tmp + '/site/docs/methods/**/*.html',
			val.dest+'/docs/methods/',
			val.template
		)))

		gulp.task('template:prototypes'+val.name,gulp.series(templating(
			options.tmp + '/site/docs/prototypes/**/*.html',
			val.dest+'/docs/prototypes/',
			val.template
		)))

		gulp.task('template:mainPage'+val.name,gulp.series(templating(
			options.tmp + '/site/partials/main.html',
			val.dest+'/',
			val.template,
			true
		)))

		gulp.task('template'+val.name,gulp.series(
			'clean:siteTmp',
			'markdown',
			'template:mainPage'+val.name,
			'template:methods'+val.name,
			'template:prototypes'+val.name
		));
	})

};
