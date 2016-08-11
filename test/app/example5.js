module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);

	var group = craft.$g()

	var sprite = craft.$shape('phaserDude','#FFFFFF')
	.$mid()
	.$into(group);

	var sprite = craft.$sprite('phaserDude')
	.$mid()
	.$set({
		x:100
	})
	.$into(group);

	var stroke = craft.$stroke('phaserDude',{
		inside:true,
		size:2,
		color:'#FF00FF'
	})
	.$set({
		x:-100
	})
	.$mid()
	// .$tint('#FF00FF')
	.$into(group);

	group.x = game.width/2;
	group.y = game.height/2;
}
