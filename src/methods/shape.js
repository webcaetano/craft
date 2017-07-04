var utils = require('../utils');
var bindProto = require('../protos');
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

	var key = ['$fill',source,options.frame].filter(Boolean).join('_')

	if(options.cache && !game.cache.checkImageKey(key)){
		var bmd = utils.colorShapeBmd(source, options.color, options.frame);
		bmd.generateTexture(key);
		key = bmd;
		bmd.pendingDestroy = true;
	} else if(!options.cache){
		key = utils.colorShapeBmd(source, options.color, options.frame);
	}


	var newAttr = Object.assign({},options);
	delete(newAttr['cache']);
	delete(newAttr['frame']);

	return $sprite(key,newAttr);
}
