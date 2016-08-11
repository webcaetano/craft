var utils = require('../utils');
var bindProto = require('../protos');
var Phaser = require('phaser');


module.exports = function(game){
	var $sprite = require('./sprite')(game);

	var colorShapeBmd = function(key, colorHex) {
		console.time('createShape')

		var source = game.make.sprite(0,0,key);
		var anchor = _.clone(source.anchor);
		var scale = _.clone(source.scale);

		var color = Phaser.Color.hexToColor(colorHex);

		source.anchor.set(0, 0);
		source.scale.set(1, 1);

		var texture = game.make.bitmapData(source.width, source.height);
		texture.fill(color.r, color.g, color.b);

		var bmd = texture;
		bmd.blendDestinationAtop();
		bmd.draw(source, 0, 0, source.texture.crop.width, source.texture.crop.height);
		bmd.pendingDestroy = true;

		source.anchor.set(anchor.x, anchor.y);
		source.scale.set(scale.x, scale.y);
		source.pendingDestroy = true;

		console.timeEnd('createShape')

		return bmd;
	}

	return function $shape(source, colorHex='#FF0000', options){
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
