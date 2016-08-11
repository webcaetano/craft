module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);

	var group = craft.$g()

	var sprite = craft.$shape('main',{
		color:'#FFFFFF',
		frame:'wizz/wizz0032.png',
		x:-70,
	})
	.$into(group);

	var sprite = craft.$sprite('main','wizz/wizz0032.png')
	.$set({
		x:20
	})
	.$into(group);

	var stroke = craft.$stroke('main',{
		inside:true,
		size:2,
		color:'#FF00FF',
		frame:'wizz/wizz0032.png',
	})
	.$set({
		x:-180
	})
	.$into(group);

	group.x = game.width/2;
	group.y = (game.height/2)-50;
}
