module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);

	var group = craft.$g();

	var rect = craft.$rect({
		width:200,
		height:150,
		fill:'#9517C5',
		stroke:{
			color:'#FFFFFF',
			size:2,
			alpha:0.85
		},
		alpha:0.5
	})
	.$align('center','center')
	.$into(group)


	var ball = craft.$circle({
		fill:'#ffffff',
		alpha:0.5,
		size:100,
		x:150,
		y:150,
	}).$set({

	})
	.$scale(1.2)
	.$into(group)

	var d = craft.$d().$copyPos(ball);
}
