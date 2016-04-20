var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
	return function $rect(options){
		var defaults = {
			x:0,
			y:0,
			group:undefined,
			fill:'#ff0000',
			width:100,
			height:100,
			size:0,
			alpha:1,
			round:0,
			stroke:{
				size:0,
				color:'#000000',
				alpha:1,
			},
		};
		options = utils.extend({},defaults,options);
		var tmpG = game.add.graphics(options.x,options.y,options.group);

		if(options.size) options.height = options.width = options.size;

		bindProto(tmpG,'graphic')

		if(options.fill) tmpG.beginFill(utils.colorCase(options.fill),options.alpha);
		if(options.stroke.size>0) tmpG.lineStyle(options.stroke.size,utils.colorCase(options.stroke.color),options.stroke.alpha);

		if(options.round===0){
			return tmpG.drawRect(0,0,options.width,options.height)
		} else {
			return tmpG.drawRoundRect(0,0,options.width,options.height,options.round)
		}
	}

}
