var utils = require('../utils');

module.exports = function(game,Phaser){
	return function $circle(options){
		var defaults = {
			x:0,
			y:0,
			group:undefined,
			fill:'#ff0000',
			size:10,
			stroke:{
				size:0,
				color:'#000',
				alpha:1,
			},
		};
		options = utils.extend({},defaults,options);
		var tmpG = game.add.graphics(options.x,options.y,options.group);

		utils.bindProto(tmpG,'graphic')

		if(options.fill) tmpG.beginFill(utils.colorCase(options.fill));
		if(options.stroke.size>0) tmpG.lineStyle(options.stroke.size,options.stroke.color,options.stroke.alpha);
		return tmpG.drawCircle(0,0,options.size)
	}
}
