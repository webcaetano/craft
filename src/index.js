var protoOptions = require('./setup');

if(!Phaser) var Phaser = require('phaser');

if(!WEBPACK_DEPENDENT){
	var _ = require('./customLodash');
} else {
	var _ = require('lodash');
}

// console.log(BOLA)


var protos = {
	$set:require('./prototypes/set')
}

var bindProto = function(obj,type='sprite'){
	_.each(protoOptions[type],function(val,funcName){
		if(!val || !protos[funcName]) return;
		obj[funcName] = protos[funcName];
	})
}

module.exports = function $craft(game){
	var self = {};

	self.$sprite = require('./objects/sprite')(game,bindProto,Phaser);

	return self;
}
