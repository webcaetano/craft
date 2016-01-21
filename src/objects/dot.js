var utils = require('../utils');

module.exports = function(game,Phaser){
	var $circle = require('./circle')(game,Phaser);

	return function $dot(size=3,fill='#ff0000',options){
		var defaults = {
			fill,
			size,
		};


		options = utils.extend({},defaults,options);
		return $circle(options);
	}
}
