var self = {};

if(!Phaser) var Phaser = require('phaser');
if(!WEBPACK_DEPENDENT){
	var _ = require('./customLodash');
} else {
	var _ = require('lodash');
}


var protoOptions = require('./setup')
var protos = {
	$set:require('./prototypes/set')
}

self.bindProto = function bindProto(obj,type='sprite'){
	_.each(protoOptions[type],function(val,funcName){
		if(!val || !protos[funcName]) return;
		obj[funcName] = protos[funcName];
	})
}


self.colorCase = function(color){
	return color.indexOf('#') != -1 ? '0x'+color.replace(/#/g,'') : color;
}

self.extend = Phaser.Utils.extend.bind(null,true) // always deep;

self.each = _.each;
self.isArray = _.isArray;

module.exports = self;
