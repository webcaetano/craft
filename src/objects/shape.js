var utils = require('../utils');
var _ = require('../lodash');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $sprite = require('./sprite');

var colorShapeBmd = function(key, colorHex) {
	var source = game.make.sprite(0,0,key);
	var anchor = {x:source.anchor.x,y:source.anchor.y};
	var scale = {x:source.scale.x,y:source.scale.y};

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

	return bmd;
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
}
