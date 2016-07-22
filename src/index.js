var protoOptions = require('./setup');

if(!Phaser) var Phaser = require('phaser');

module.exports = function $craft(game){
	var self = {};

	self.$sprite = require('./objects/sprite')(game,Phaser);

	self.$tileSprite = require('./objects/tileSprite')(game,Phaser);

	self.$circle =
	self.$c = require('./objects/circle')(game,Phaser);

	self.$graphic = require('./objects/graphic')(game,Phaser);

	self.$dot =
	self.$d = require('./objects/dot')(game,Phaser);

	self.$rect =
	self.$box = require('./objects/rect')(game,Phaser);

	self.$group =
	self.$g = require('./objects/group')(game,Phaser);

	return self;
}
