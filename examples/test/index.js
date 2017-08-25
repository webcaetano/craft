/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// var utils = require('./modules/utils');
	// var _ = require('lodash');
	'use strict';

	var Phaser = __webpack_require__(1);
	// var browser = browserDetection();
	var rootScope = {
		options: {
			width: 300,
			height: 300,
			where: 'master-canvas'
		},
		debug: false // make sure set it to false when release
	};

	// @if !dist
	__webpack_require__(2)();
	// @endif

	var game = new Phaser.Game(rootScope.options.width, rootScope.options.height, Phaser.CANVAS, rootScope.options.where, rootScope.options.where);

	game.state.add('game', __webpack_require__(5)(game, rootScope));

	// game.state.start('blank');
	game.state.start('game');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Phaser;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stats = __webpack_require__(3);
	var _ = __webpack_require__(4);

	var defaults = {};

	module.exports = function (options) {
		options = _.extend({}, defaults, options);

		var stats = new Stats();

		stats.setMode(0);

		stats.domElement.style.position = 'absolute';
		stats.domElement.style.right = '0px';
		stats.domElement.style.bottom = '0px';

		document.body.appendChild(stats.domElement);

		setInterval(function () {
			stats.begin();
			stats.end();
		}, 1000 / 60);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Stats;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var params = __webpack_require__(7);
	var _ = __webpack_require__(4);
	var Phaser = __webpack_require__(1);

	var assets = {
		images: {
			phaserDude: 'images/phaser-dude.png'
		},
		sprites: {},
		audio: {},
		atlas: {}
	};
	var scope = {};

	module.exports = function (game, rootScope) {
		var state = {};

		var craft = __webpack_require__(8)(game);

		state.init = function () {};

		state.preload = function () {
			game.stage.disableVisibilityChange = false;
			game.stage.backgroundColor = '#262626';
			utils.loadAssets(game, assets);
			game.load.start();
		};

		state.create = function () {
			switch (params.example) {
				default:
				case '1':
					__webpack_require__(9)(game, scope, rootScope);
					break;
				case '2':
					__webpack_require__(10)(game, scope, rootScope);
					break;
			}
		};

		return state;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Phaser = __webpack_require__(1);
	var _ = __webpack_require__(4);

	var self = {};

	self.randInRange = function (range) {
		var a = self.rand(0, 360) * (Math.PI / 180);
		var d = self.rand(0, range / 2);
		return {
			x: Math.cos(a) * d,
			y: Math.sin(a) * d
		};
	};

	self.radPos = function (point, angle, range) {
		var a = angle * (Math.PI / 180);
		var d = range;
		return {
			x: point.x + Math.cos(a) * d,
			y: point.y + Math.sin(a) * d
		};
	};

	self.rand = function () {
		var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		var max = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	self.getRangeIndexByValue = function (length, current, modes) {
		var ASC = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

		if (current >= length) return modes;
		if (current <= 0) return 1;
		if (ASC) {
			return Math.ceil(current / Math.floor(length / modes));
		} else {
			return Math.ceil((length - current) / Math.floor(length / modes));
		}
	};

	self.getModeByValue = function (length, current, modes) {
		var ASC = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

		return modes[self.getRangeIndexByValue(length, current, modes.length, ASC) - 1];
	};

	self.randPorRange = function (val, por) {
		var part = Math.ceil(val * por / 100);
		return self.rand(val - part, val + part);
	};

	self.toHHMMSS = function ($) {
		var sec_num = parseInt($, 10);
		var hours = Math.floor(sec_num / 3600);
		var minutes = Math.floor((sec_num - hours * 3600) / 60);
		var seconds = sec_num - hours * 3600 - minutes * 60;

		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		return hours + ':' + minutes + ':' + seconds;
	};

	self.renameAttr = function (obj, name, replace) {
		obj[replace] = obj[name];
		delete obj[name];
		return obj;
	};

	self.frameAtlas = function (atlas) {
		var add = {
			rotated: false,
			trimmed: true
		};

		var frames = [];
		_.forEach(atlas.sprites, function (sprite, spriteName) {
			var c = 0;
			_.forEach(sprite.frames, function (frame, k) {
				frame = _.extend(frame, add);
				frame = self.renameAttr(frame, 's', 'spriteSourceSize');
				frame = self.renameAttr(frame, 'f', 'frame');

				frame.sourceSize = {
					w: frame.spriteSourceSize.w,
					h: frame.spriteSourceSize.h
				};

				if (frame.r) {
					for (var i = 0; i < frame.r; i++) {
						var clone = _.clone(frame);
						clone.filename = spriteName + _.padLeft(++c, 4, '0');
						frames.push(clone);
					}
				} else {
					frame.filename = spriteName + _.padLeft(++c, 4, '0');
					frames.push(frame);
				}
			});
		});

		atlas.frames = frames;
		return _.omit(atlas, ['sprites']);
	};

	self.ifTrue = function ($) {
		var def = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		return $ ? $ : def;
	};

	self.copyPos = function (obj1, obj2) {
		obj1.x = obj2.x;
		obj1.y = obj2.y;
	};

	self.loadAssets = function (game, assets) {
		var i;
		for (i in assets.atlas) {
			game.load.atlasJSONHash(i, assets.atlas[i].image, self.ifTrue(assets.atlas[i].jsonUrl), self.ifTrue(assets.atlas[i].json));
		}
		for (i in assets.images) game.load.image(i, assets.images[i]);
		for (i in assets.sprites) game.load.spritesheet(i, assets.sprites[i].image, assets.sprites[i].width, assets.sprites[i].height, assets.sprites[i].frames);
		for (i in assets.audio) game.load.audio(i, assets.audio[i]);
	};

	self.setAtlasFrame = function (objs) {
		var frame = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

		if (!_.isArray(objs)) objs = [objs];
		_.map(objs, function (obj, k) {
			if (!obj.name) console.error('object without name');
			obj.frameName = obj.name + _.padLeft(frame, 4, '0');
		});
		return objs;
	};

	self.por = function (val, por) {
		var plus = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
		var fix = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

		return Number((val * por / 100 * (plus ? 1 : -1) + val).toFixed(fix));
	};

	self.dist = function (obj1, obj2) {
		return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
	};

	self.setBtn = function (obj) {
		var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		if (!obj) return;
		if (!obj.inputEnabled) obj.inputEnabled = true;
		if (!obj.input) return;
		// obj.input.pixelPerfectClick = true;
		// obj.input.pixelPerfectOver = true;
		obj.input.useHandCursor = true;
		if (callback) {
			obj.events.onInputUp.add(function (e) {
				callback.apply(this, [e]);
			});
		}
		return obj;
	};

	self.setHover = function (obj) {
		var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
		var callback2 = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

		if (!obj) return;
		if (!obj.inputEnabled) obj.inputEnabled = true;
		if (!obj.input) return;
		obj.input.useHandCursor = true;
		if (callback) {
			obj.events.onInputOver.add(function (e) {
				callback.apply(this, [e]);
			});
		}
		if (callback2) {
			obj.events.onInputOut.add(function (e) {
				callback2.apply(this, [e]);
			});
		}
		return obj;
	};

	self.btnAudio = function (obj) {
		var audioHover = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
		var audioClick = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

		if (!obj.inputEnabled) obj.inputEnabled = true;
		if (audioHover) {
			obj.events.onInputOver.add(function (e) {
				audioHover.play();
			});
		}
		if (audioClick) {
			obj.events.onInputUp.add(function (e) {
				audioClick.play();
			});
		}
		return obj;
	};

	module.exports = self;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	module.exports = (function () {
		var resp = {};
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] === '') continue;
			if (typeof resp[pair[0]] === "undefined") {
				resp[pair[0]] = decodeURIComponent(pair[1]);
			} else if (typeof resp[pair[0]] === "string") {
				var arr = [resp[pair[0]], decodeURIComponent(pair[1])];
				resp[pair[0]] = arr;
			} else {
				resp[pair[0]].push(decodeURIComponent(pair[1]));
				console.log('x');
			}
		}
		return resp;
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = $craft;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var params = __webpack_require__(7);

	module.exports = function (game, scope, rootScope) {
		var craft = __webpack_require__(8)(game);

		var group = craft.$g();

		var sprite = craft.$sprite('phaserDude').$set({
			x: 100,
			y: 100
		}).$mid().$tint('#FF0000').$into(group);

		//You can keep using Phaser
		sprite.x = 150;

		//You can use the prototypes without a chain
		sprite.$set({
			y: 150
		});
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var params = __webpack_require__(7);

	module.exports = function (game, scope, rootScope) {
		var craft = __webpack_require__(8)(game);

		var group = craft.$g();

		var rect = craft.$rect({
			width: 200,
			height: 150,
			fill: '#9517C5'
		}).$align('center', 'center').$into(group);

		var ball = craft.$circle({
			fill: '#ffffff',
			size: 100
		}).$set({
			x: 150,
			y: 150
		}).$into(group);

		var d = craft.$d().$copyPos(ball);
	};

/***/ }
/******/ ]);