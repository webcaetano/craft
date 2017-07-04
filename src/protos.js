var utils = require('./utils');
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
	for(var funcName in protoOptions[type]){
		if(!protoOptions[type][funcName] || !protos[funcName]) continue;

		obj[funcName] = protos[funcName];
	}
}
