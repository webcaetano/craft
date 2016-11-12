var utils = require('../utils');
var _ = require('../lodash');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $sprite = require('./sprite');

module.exports = function $shape(source, frame=undefined, options){
	if(typeof frame==='object') {
		var tmpVar = options;
		options = frame ? frame : {};
		frame = tmpVar;
	}

	var defaults = {
		frame,
		x:0,
		y:0,
		group:undefined,
		cache:true,
		color:'#FF0000'
	};
	options = utils.extend({},defaults,options);

	var key = _.compact(['$fill',source,options.frame]).join('_')

	if(options.cache && !game.cache.checkImageKey(key)){
		var bmd = utils.colorShapeBmd(source, options.color, options.frame);
		bmd.generateTexture(key);
		bmd.pendingDestroy = true;
	} else if(!options.cache){
		key = colorShapeBmd(sourcee, options.color, options.frame);
	}


	return $sprite(key,_.omit(options,[
		'cache',
		'frame'
	]));
}
