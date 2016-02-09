// var utils = require('./modules/utils');
// var _ = require('lodash');
var Phaser = require('phaser');
// var browser = browserDetection();
var rootScope = {
	options:{
		width:300,
		height:300,
		where:'master-canvas'
	},
	debug:false // make sure set it to false when release
}

// @if !dist
require('./modules/stats')();
// @endif


var game = new Phaser.Game(rootScope.options.width, rootScope.options.height, Phaser.CANVAS, rootScope.options.where, rootScope.options.where);

game.state.add('game', require('./game')(game,rootScope));

// game.state.start('blank');
game.state.start('game');
