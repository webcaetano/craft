module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);

	var group = craft.$g()

	var sprite = craft.$shape('phaserDude')
	.$mid()
	.$scale(1.5)
	.$tint('#FF00FF')
	.$into(group);

	group.x = game.width/2;
	group.y = game.height/2;
}
