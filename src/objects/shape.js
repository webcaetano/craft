var utils = require('../utils');
var _ = require('../lodash');
var bindProto = require('../protos');
var Phaser = require('phaser');
var {game} = require('../scope');
var $sprite = require('./sprite');

module.exports = function $shape(source, colorHex='#FF0000', options){
	if(typeof options == 'string') options = {frame:options};
	var defaults = {
		x:0,
		y:0,
		frame:undefined,
		group:undefined,
		cache:true,
	};
	options = utils.extend({},defaults,options);

	var key = '$fill_'+source.key+'_'+source.frameName;

	if(options.cache && !game.cache.checkImageKey(key)){
		var bmd = utils.colorShapeBmd(source, colorHex);
		bmd.generateTexture(key);
		bmd.pendingDestroy = true;
	} else if(!options.cache){
		key = colorShapeBmd(source, colorHex);
	}


	return $sprite(key,_.omit(options,[
		'cache'
	]));
}
