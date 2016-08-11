var utils = require('../utils');
var bindProto = require('../protos');
var Phaser = require('phaser');

module.exports = function(game){
	var $circle = require('./circle')(game);

	return function $dot(size=5,fill='#ff0000',options){
		var defaults = {
			fill,
			size,
		};

		options = utils.extend({},defaults,options);
		return $circle(options);
	}
}
