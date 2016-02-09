var params = require('./modules/urlParams');

module.exports = function(game,scope,rootScope){
	var craft = require('$craft')(game);

	var group = craft.$g();

	var rect = craft.$rect({
		width:200,
		height:150,
		fill:'#9517C5',
	})
	.$align('center','center')
	.$into(group)


	var ball = craft.$circle({
		fill:'#ffffff',
		size:100
	}).$set({
		x:150,
		y:150,
	})
	.$into(group)

	var d = craft.$d().$copyPos(ball);
}
