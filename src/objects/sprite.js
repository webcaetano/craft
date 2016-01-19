module.exports = function(game){
	return function $sprite(key,options){
		var defaults = {
			x:0,
			y:0,
			frame:undefined,
			group:undefined
		};
		options = _.defaultsDeep({},options,defaults);
		var tmpObj = game.add.sprite(options.x,options.y,key,options.frame,options.group);
		// prototypes
		bindProto(tmpObj,'sprite')

		return tmpObj;
	}
}
