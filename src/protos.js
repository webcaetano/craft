var utils = require('./utils');
var _ = require('./lodash');
var protoOptions = require('./setup');
var protos = {
	$set:require('./prototypes/set'),
	$scale:require('./prototypes/scale'),
	$tint:require('./prototypes/tint'),
	$into:require('./prototypes/into'),
	$mid:require('./prototypes/mid'),
	$copyPos:require('./prototypes/copyPos'),
	$fixPos:require('./prototypes/fixPos'),
	$add:require('./prototypes/add'),
	$align:require('./prototypes/align'),
}


module.exports = function bindProto(obj,type='sprite'){
	_.each(protoOptions[type],function(val,funcName){
		if(!val || !protos[funcName]) return;
		obj[funcName] = protos[funcName];
	})
}
