module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);


	craft.$text('teemo',{
		size:80,
		bold:false,
		color:"#FFFFFF",
		stroke:{
			size:8,
			color:'#FF0000'
		}
	})
	.$set({
		x:100,
		y:100,
	})
	.$align('center','center')
}
