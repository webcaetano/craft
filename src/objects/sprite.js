var utils = require('../utils');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');

module.exports = function $sprite(key,options){
	if(typeof options == 'string') options = {frame:options};
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
