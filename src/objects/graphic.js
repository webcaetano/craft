var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
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
