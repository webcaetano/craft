var params = require('./modules/urlParams');

module.exports = function(game,scope,rootScope){
	var craft = require('$craft')(game);

	var group = craft.$g()
	.$set({
		x:0,
		y:0
	})

	var sprite = craft.$sprite('phaserDude')
	.$mid()
	.$scale(1.5)
	.$tint('#FF0000')
	.$into(group);

	// You can keep using Phaser vanilla
	group.x = 150;

	// You can use the prototypes without a chain
	group.$set({
		y:150
	});

	group.$scale(1.5);
}
