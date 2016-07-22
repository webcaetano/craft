var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
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

		// var p2 = group.border.add(game.add.tileSprite(
		// 	p1.x+p1.width,
		// 	66,
		// 	35,
		// 	6,
		// 	'main',
		// 	'ui/border02.png'
		// 	)
		// );

		return tmpObj;
	}
}
