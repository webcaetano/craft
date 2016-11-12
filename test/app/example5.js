module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);

	var group = craft.$g()

	// === WITHOUT FRAMENAME

	var sprite = craft.$shape('phaserDude',{
		color:'#FFFFFF',
		x:-40,
		y:-50,
	})
	.$into(group);

	var sprite = craft.$sprite('phaserDude')
	.$set({
		x:20,
		y:-50,
	})
	.$into(group);


	var stroke = craft.$stroke('phaserDude',{
		inside:true,
		size:2,
		color:'#FF00FF',
	})
	.$set({
		x:-100,
		y:-50,
	})
	.$into(group);

	/// ==== WTIH FRAME NAME

	var sprite = craft.$shape('main','wizz/wizz0032.png',{
		color:'#FFFFFF',
		x:-70,
	})
	.$into(group);

	var sprite = craft.$sprite('main','wizz/wizz0032.png')
	.$set({
		x:20
	})
	.$into(group);

	var stroke = craft.$stroke('main','wizz/wizz0032.png',{
		inside:true,
		size:2,
		color:'#FF00FF',
	})
	.$set({
		x:-180
	})
	.$into(group);

	group.x = game.width/2;
	group.y = (game.height/2)-50;
}
