var self = {};
var Phaser = require('phaser');

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

// scope.misc.stroke = function(source, colorHex, size, pixel){
// 	if(size===undefined) size = 1;
// 	if(pixel===undefined) pixel = 1;
// 	var anchor = _.clone(source.anchor);
// 	var scale = _.clone(source.scale);


// 	source.anchor.set(0, 0);
// 	source.scale.set(1, 1);

// 	var texture = game.make.bitmapData(source.width+(size*2), source.height+(size*2));
// 	var shape = scope.misc.colorShape(source,colorHex);
// 	console.time('createStroke')

// 	_.times((size*2*(1/pixel))+1,function(i){
// 		_.times((size*2*(1/pixel))+1,function(k){
// 			texture.draw(
// 				shape,
// 				(i*pixel),
// 				(k*pixel)
// 			)
// 		});
// 	});


// 	texture.draw(source, size, size, source.texture.crop.width, source.texture.crop.height);

// 	source.anchor.set(anchor.x, anchor.y);
// 	source.scale.set(scale.x, scale.y);

// 	var resp = craft.$sprite(texture);
// 	// stroke.cacheAsBitmap = true;
// 	console.timeEnd('createStroke')
// 	return resp;
// }
