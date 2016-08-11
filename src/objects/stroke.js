var utils = require('../utils');
var lodash = require('../lodash');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $sprite = require('./sprite');

scope.misc.stroke = function(source, colorHex, size, pixel){
	if(size===undefined) size = 1;
	if(pixel===undefined) pixel = 1;
	var anchor = _.clone(source.anchor);
	var scale = _.clone(source.scale);


	source.anchor.set(0, 0);
	source.scale.set(1, 1);

	var texture = game.make.bitmapData(source.width+(size*2), source.height+(size*2));
	var shape = scope.misc.colorShape(source,colorHex);
	console.time('createStroke')

	_.times((size*2*(1/pixel))+1,function(i){
		_.times((size*2*(1/pixel))+1,function(k){
			texture.draw(
				shape,
				(i*pixel),
				(k*pixel)
			)
		});
	});


	texture.draw(source, size, size, source.texture.crop.width, source.texture.crop.height);

	source.anchor.set(anchor.x, anchor.y);
	source.scale.set(scale.x, scale.y);

	var resp = craft.$sprite(texture);
	// stroke.cacheAsBitmap = true;
	console.timeEnd('createStroke')
	return resp;
}

module.exports = function $shape(source, colorHex='#FF0000', options){
		if(typeof options == 'string') options = {frame:options};
		var defaults = {
			x:0,
			y:0,
			frame:undefined,
			group:undefined,
			cache:true,
		};
		options = utils.extend({},defaults,options);

		var key = '$fill_'+source.key+'_'+source.frameName;

		if(options.cache && !game.cache.checkImageKey(key)){
			var bmd = colorShapeBmd(source, colorHex);
			bmd.generateTexture(key);
			bmd.pendingDestroy = true;
		} else if(!options.cache){
			key = colorShapeBmd(source, colorHex);
		}


		return $sprite(key,_.omit(options,[
			'cache'
		]));

		return tmpObj;
	}
}
