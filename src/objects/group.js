var utils = require('../utils');

module.exports = function(game,Phaser){
	return function $group(options){
		var defaults = {
			parent:undefined,
			name:undefined,
			addToStage:undefined,
			enableBody:undefined,
			physicsBodyType:undefined
		};
		options = utils.extend({},options,defaults);
		var tmpG = game.add.group(options.parent, options.name, options.addToStage, options.enableBody, options.physicsBodyType);

		utils.bindProto(tmpG,'group')

		return tmpG;
	}
}
