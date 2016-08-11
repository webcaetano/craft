var utils = require('../utils');
var bindProto = require('../protos');
var Phaser = require('phaser');

module.exports = function(game){
	return function $tileSprite(key,options,width,height){
		if(typeof options == 'string') options = {frame:options};
		var defaults = {
			x:0,
			y:0,
			frame:undefined,
			group:undefined
		};
		options = utils.extend({},defaults,options);

		var tmpObj = game.add.tileSprite(
			options.x,
			options.y,
			width,
			height,
			key,
			options.frame,
			// options.group
		);
		// prototypes
		bindProto(tmpObj,'sprite')

		return tmpObj;
	}
}
