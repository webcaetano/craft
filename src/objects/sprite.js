var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
	return function $sprite(key,options){
		var defaults = {
			x:0,
			y:0,
			frame:undefined,
			group:undefined
		};
		options = utils.extend({},defaults,options);
		var tmpObj = game.add.sprite(options.x,options.y,key,options.frame,options.group);
		// prototypes
		bindProto(tmpObj,'sprite')

		return tmpObj;
	}
}
