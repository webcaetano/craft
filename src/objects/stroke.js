var utils = require('../utils');
var lodash = require('../lodash');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $sprite = require('./sprite');

var strokeBmd = function(key, options){
	var source = game.make.sprite(0,0,key,options.frame);
	var {size,pixel} = options;

	var bmd = game.make.bitmapData(source.width+(size*2), source.height+(size*2));
	var shape = utils.colorShapeBmd(key,options.color,options.frame);

	_.times((size*2*(1/pixel))+1,function(i){
		_.times((size*2*(1/pixel))+1,function(k){
			bmd.draw(
				shape,
				(i*pixel),
				(k*pixel)
			)
		});
	});

	if(options.inside) bmd.draw(source, size, size, source.texture.crop.width, source.texture.crop.height);
	source.pendingDestroy = true;

	return bmd;
}

module.exports = function $shape(source, frame=undefined, options){
	if(typeof frame==='object') {
		var tmpVar = options;
		options = frame ? frame : {};
		frame = tmpVar;
	}

	var defaults = {
		frame,
		x:0,
		y:0,
		group:undefined,
		cache:true,
		size:1,
		pixel:1,
		inside:true,
		color:'#FF0000'
	};
	options = utils.extend({},defaults,options);


	var key = _.compact(['$stoke',source,options.frame]).join('_');

	if(options.cache && !game.cache.checkImageKey(key)){
		var bmd = strokeBmd(source, options);
		bmd.generateTexture(key);
		bmd.pendingDestroy = true;
	} else if(!options.cache){
		key = strokeBmd(options);
	}

	return $sprite(key,_.omit(options,[
		'cache',
		'color',
		'pixel',
		'inside',
		'frame',
		'size',
	]));
}
