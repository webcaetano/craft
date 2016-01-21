var utils = require('./utils');
var protoOptions = require('./setup');
var protos = {
	$set:require('./prototypes/set'),
	$tint:require('./prototypes/tint'),
	$into:require('./prototypes/into'),
	$mid:require('./prototypes/mid'),
	$copyPos:require('./prototypes/copyPos'),
	$fixPos:require('./prototypes/fixPos'),
	$add:require('./prototypes/add'),
}


module.exports = function bindProto(obj,type='sprite'){
	utils.each(protoOptions[type],function(val,funcName){
		if(!val || !protos[funcName]) return;
		obj[funcName] = protos[funcName];
	})
}
