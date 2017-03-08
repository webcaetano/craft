var protoOptions = require('./setup');
var scope = require('./scope');
var Phaser = require('phaser');
var version = require('./version.json');

console.log('%c Craft v'+version+' ', 'background: #002874; color: #ffffff');

module.exports = function $craft(game){
	var self = {};

	scope.game = game;

	return _.reduce([
		{
			name:'$sprite',
			method:require('./methods/sprite'),
			aliases:['$s'],
		},
		{
			name:'$tileSprite',
			method:require('./methods/tileSprite'),
		},
		{
			name:'$text',
			method:require('./methods/text'),
			aliases:['$t'],
		},
		{
			name:'$circle',
			method:require('./methods/circle'),
			aliases:['$t'],
		},
		{
			name:'$graphic',
			method:require('./methods/graphic'),
			aliases:['$t'],
		},
		{
			name:'$dot',
			method:require('./methods/dot'),
			aliases:['$d'],
		},
		{
			name:'$rect',
			method:require('./methods/rect'),
			aliases:['$box'],
		},
		{
			name:'$group',
			method:require('./methods/group'),
			aliases:['$g'],
		},
		{
			name:'$shape',
			method:require('./methods/shape'),
		},
		{
			name:'$stroke',
			method:require('./methods/stroke'),
		},
	],function(self,val,i){
		var method = self[val.name] = val.method;

		if(val.aliases){
			_.each(val.aliases,function(alias){
				self[alias] = method;
			});
		}

		return self;
	},self)
}
