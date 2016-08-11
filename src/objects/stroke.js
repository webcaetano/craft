var utils = require('../utils');
var lodash = require('../lodash');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $sprite = require('./sprite');

var stroke =

module.exports = function $stroke(key, options){
	var defaults = {
		x:0,
		y:0,
		frame:undefined,
		group:undefined,
		cache:true,
		size:1,
		pixel:1,
		inside:true,
		color:'#FF0000'
	};
	options = utils.extend({},defaults,options);

	var source = game.make.sprite(0,0,key);
	var {size,pixel} = options;

	var texture = game.make.bitmapData(source.width+(size*2), source.height+(size*2));
	var shape = utils.colorShapeBmd(key,options.color);

	_.times((size*2*(1/pixel))+1,function(i){
		_.times((size*2*(1/pixel))+1,function(k){
			texture.draw(
				shape,
				(i*pixel),
				(k*pixel)
			)
		});
	});

	if(options.inside) texture.draw(source, size, size, source.texture.crop.width, source.texture.crop.height);

	source.pendingDestroy = true;

	return $sprite(texture,_.omit(options,[
		'cache',
		'color',
		'pixel',
		'inside',
		'size',
	]));
}
