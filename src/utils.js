var self = {};

if(!Phaser) var Phaser = require('phaser');
if(!__DEPENDENT__){
	var _ = require('./customLodash');
} else {
	var _ = require('lodash');
}

self.colorCase = function(color){
	return color.indexOf('#') != -1 ? '0x'+color.replace(/#/g,'') : color;
}

self.extend = Phaser.Utils.extend.bind(null,true) // always deep;

self.each = _.each;
self.isArray = _.isArray;

module.exports = self;
