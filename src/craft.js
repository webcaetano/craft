var protoOptions = require('./setup');

var protos = {
	$set:require('./prototypes/set')
}

module.exports = function $craft(game){
	var self = {};

	self.$sprite = require('./objects/sprite')(game);


	return self;
}
