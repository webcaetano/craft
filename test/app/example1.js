var params = require('./modules/urlParams');

module.exports = function(game,scope,rootScope){
	var craft = require('$craft')(game);

	var group = craft.$g();

	var sprite = craft.$sprite('phaserDude')
	.$set({
		x:100,
		y:100
	})
	.$mid()
	.$tint('#FF0000')
	.$into(group);

	//You can keep using Phaser
	sprite.x = 150;

	//You can use the prototypes without a chain
	sprite.$set({
		y:150
	});
}
