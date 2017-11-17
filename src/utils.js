var self = {};
// var Phaser = require('phaser');
var {game} = require('./scope');

self.colorCase = function(color){
	return color.indexOf('#') != -1 ? '0x'+color.replace(/#/g,'') : color;
}

self.extend = Phaser.Utils.extend.bind(null,true) // always deep;

self.colorShapeBmd = function(key, colorHex, frame=undefined) {
	var source = game.make.sprite(0,0,key,frame);

	var color = Phaser.Color.hexToColor(colorHex);

	var texture = game.make.bitmapData(source.width, source.height);
	texture.fill(color.r, color.g, color.b);

	var bmd = texture;
	bmd.blendDestinationAtop();
	bmd.draw(source, 0, 0, source.texture.crop.width, source.texture.crop.height);

	source.pendingDestroy = true;

	return bmd;
}

module.exports = self;
