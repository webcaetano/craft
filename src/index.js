var protoOptions = require('./setup');
var scope = require('./scope');
var Phaser = require('phaser');
var version = require('./version.json');

console.log('%c Craft v'+version+' ', 'background: #002874; color: #ffffff');

module.exports = function $craft(game){
	var self = {};

	scope.game = game;

	self.$sprite =
	self.$s =require('./methods/sprite');

	self.$tileSprite = require('./methods/tileSprite');

	self.$text =
	self.$t = require('./methods/text');

	self.$circle =
	self.$c = require('./methods/circle');

	self.$graphic = require('./methods/graphic');

	self.$dot =
	self.$d = require('./methods/dot');

	self.$rect =
	self.$box = require('./methods/rect');

	self.$group =
	self.$g = require('./methods/group');

	self.$shape = require('./methods/shape');

	self.$stroke = require('./methods/stroke');

	return self;
}
