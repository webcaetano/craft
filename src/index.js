var protoOptions = require('./setup');
var scope = require('./scope');
var Phaser = require('phaser');
var version = require('./version.json');

console.log('%c Craft v'+version+' ', 'background: #002874; color: #ffffff');

module.exports = function $craft(game){
	var self = {};

	scope.game = game;

	self.$sprite =
	self.$s =require('./objects/sprite');

	self.$tileSprite = require('./objects/tileSprite');

	self.$text =
	self.$t = require('./objects/text');

	self.$circle =
	self.$c = require('./objects/circle');

	self.$graphic = require('./objects/graphic');

	self.$dot =
	self.$d = require('./objects/dot');

	self.$rect =
	self.$box = require('./objects/rect');

	self.$group =
	self.$g = require('./objects/group');

	self.$shape = require('./objects/shape');

	self.$stroke = require('./objects/stroke');

	return self;
}
