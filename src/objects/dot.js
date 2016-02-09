var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
	var $circle = require('./circle')(game,Phaser);

	return function $dot(size=5,fill='#ff0000',options){
		var defaults = {
			fill,
			size,
		};

		options = utils.extend({},defaults,options);
		return $circle(options);
	}
}
