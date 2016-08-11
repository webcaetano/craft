var utils = require('../utils');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $circle = require('./circle');

module.exports = function $dot(size=5,fill='#ff0000',options){
	var defaults = {
		fill,
		size,
	};

	options = utils.extend({},defaults,options);
	return $circle(options);
}
