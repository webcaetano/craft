var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
	return function $text(text,options){
		if(typeof options == 'string') options = {frame:options};
		var defaults = {
			x:0,
			y:0,
			bold:false,
			size:15,
			font:"'Helvetica Neue', Helvetica, Arial, sans-serif",
			stroke:{
				size:0,
				color:'#000000'
			},
			align:'center',
			color:'#000000',
		};
		options = utils.extend({},defaults,options);

		var tmpObj = game.add.text(
			0,
			0,
			text,
			{
				font: [
					(options.bold ? 'bold' : ''),
					"30px",
					options.font,
				].join(" "),
				align:'center',
				fill:options.color,
				stroke:options.stroke.color,
				strokeThickness:options.stroke.size,
			}
		);
		// prototypes
		bindProto(tmpObj,'text');

		return tmpObj;
	}
}
