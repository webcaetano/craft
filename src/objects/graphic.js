var utils = require('../utils');
var bindProto = require('../protos');
var Phaser = require('phaser');

module.exports = function(game){
	return function $graphic(options){
		var defaults = {
			x:0,
			y:0,
			group:undefined,
		};
		options = utils.extend({},defaults,options);
		var tmpG = game.add.graphics(options.x,options.y,options.group);

		bindProto(tmpG,'graphic');
		return tmpG;
	}
}
