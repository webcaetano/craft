module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);

	var group = craft.$g();
	var t = craft.$tileSprite('main','pattern.png',300*2,300*2)
	.$mid()
	.$into(group)


	var a = craft.$sprite('main','wizz/wizz0032.png')
	.$set({
		x:100,
		y:100
	})
	.$into(group)

	game.add.tween(t).to({
		y:'+160',
		x:'+160'
	},1000*5,null,true,null,-1);
}
