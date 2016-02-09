var utils = require('./modules/utils');
var params = require('./modules/urlParams');
var _ = require('lodash');
var Phaser = require('phaser');

var assets = {
	images:{
		phaserDude:'images/phaser-dude.png'
	},
	sprites:{},
	audio:{},
	atlas:{}
}
var scope = {};

module.exports = function(game,rootScope){
	var state = {};

	var craft = require('$craft')(game);

	state.init = function(){
	}

	state.preload = function(){
		game.stage.disableVisibilityChange = false;
		game.stage.backgroundColor = '#262626';
		utils.loadAssets(game,assets);
		game.load.start();
	}

	state.create = function(){
		switch(params.example){
			default :
			case '1':
				require('./example1')(game,scope,rootScope);
			break;
			case '2':
				require('./example2')(game,scope,rootScope);
			break;
		}
	}

	return state;
}
