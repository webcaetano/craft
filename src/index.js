var protoOptions = require('./setup');
var Phaser = require('phaser');

module.exports = function $craft(game){
	var self = {};

	self.$sprite = require('./objects/sprite')(game);

	self.$tileSprite = require('./objects/tileSprite')(game);

	self.$text = require('./objects/text')(game);

	self.$circle =
	self.$c = require('./objects/circle')(game);

	self.$graphic = require('./objects/graphic')(game);

	self.$dot =
	self.$d = require('./objects/dot')(game);

	self.$rect =
	self.$box = require('./objects/rect')(game);

	self.$group =
	self.$g = require('./objects/group')(game);

	self.$shape = require('./objects/shape')(game);

	return self;
}
