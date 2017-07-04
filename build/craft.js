(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Phaser"));
	else if(typeof define === 'function' && define.amd)
		define(["Phaser"], factory);
	else if(typeof exports === 'object')
		exports["craft"] = factory(require("Phaser"));
	else
		root["craft"] = factory(root["Phaser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	var protoOptions = __webpack_require__(1);
	var scope = __webpack_require__(2);
	var Phaser = __webpack_require__(3);
	var version = __webpack_require__(4);

	console.log('%c Craft v' + version + ' ', 'background: #002874; color: #ffffff');

	module.exports = function $craft(game) {
		var self = {};

		scope.game = game;

		return _.reduce([{
			name: '$sprite',
			method: __webpack_require__(5),
			aliases: ['$s']
		}, {
			name: '$tileSprite',
			method: __webpack_require__(17)
		}, {
			name: '$text',
			method: __webpack_require__(18),
			aliases: ['$t']
		}, {
			name: '$circle',
			method: __webpack_require__(19),
			aliases: ['$t']
		}, {
			name: '$graphic',
			method: __webpack_require__(20),
			aliases: ['$t']
		}, {
			name: '$dot',
			method: __webpack_require__(21),
			aliases: ['$d']
		}, {
			name: '$rect',
			method: __webpack_require__(22),
			aliases: ['$box']
		}, {
			name: '$group',
			method: __webpack_require__(23),
			aliases: ['$g']
		}, {
			name: '$shape',
			method: __webpack_require__(24)
		}, {
			name: '$stroke',
			method: __webpack_require__(25)
		}], function (self, val, i) {
			var method = self[val.name] = val.method;

			if (val.aliases) {
				_.each(val.aliases, function (alias) {
					self[alias] = method;
				});
			}

			return self;
		}, self);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		sprite: {
			$set: true,
			$tint: true,
			$into: true,
			$mid: true,
			$scale: true,
			$atlasImg: true,
			$atlasAnims: true,
			$fixPos: true,
			$copyPos: true,
			$align: true
		},
		graphic: {
			$set: true,
			$tint: true,
			$into: true,
			$scale: true,
			$mid: true,
			$fixPos: true,
			$copyPos: true,
			$align: true
		},
		text: {
			$set: true,
			$tint: true,
			$into: true,
			$scale: true,
			$fixPos: true,
			$copyPos: true,
			$align: true
		},
		group: {
			$set: true,
			$into: true,
			$fixPos: true,
			$scale: true,
			$add: true,
			$copyPos: true,
			$align: true
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "1.5.2";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $sprite(key, options) {
		if (typeof options == 'string') options = { frame: options };
		var defaults = {
			x: 0,
			y: 0,
			frame: undefined,
			group: undefined
		};
		options = utils.extend({}, defaults, options);
		var tmpObj = game.add.sprite(options.x, options.y, key, options.frame, options.group);
		// prototypes
		bindProto(tmpObj, 'sprite');

		return tmpObj;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var self = {};
	var Phaser = __webpack_require__(3);

	var _require = __webpack_require__(2);

	var game = _require.game;

	self.colorCase = function (color) {
		return color.indexOf('#') != -1 ? '0x' + color.replace(/#/g, '') : color;
	};

	self.extend = Phaser.Utils.extend.bind(null, true); // always deep;

	self.colorShapeBmd = function (key, colorHex) {
		var frame = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

		var source = game.make.sprite(0, 0, key, frame);

		var color = Phaser.Color.hexToColor(colorHex);

		var texture = game.make.bitmapData(source.width, source.height);
		texture.fill(color.r, color.g, color.b);

		var bmd = texture;
		bmd.blendDestinationAtop();
		bmd.draw(source, 0, 0, source.texture.crop.width, source.texture.crop.height);

		source.pendingDestroy = true;

		return bmd;
	};

	module.exports = self;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var protoOptions = __webpack_require__(1);
	var protos = {
		$set: __webpack_require__(8),
		$scale: __webpack_require__(9),
		$tint: __webpack_require__(10),
		$into: __webpack_require__(11),
		$mid: __webpack_require__(12),
		$copyPos: __webpack_require__(13),
		$fixPos: __webpack_require__(14),
		$add: __webpack_require__(15),
		$align: __webpack_require__(16)
	};

	module.exports = function bindProto(obj) {
		var type = arguments.length <= 1 || arguments[1] === undefined ? 'sprite' : arguments[1];

		for (var funcName in protoOptions[type]) {
			if (!protoOptions[type][funcName] || !protos[funcName]) continue;

			obj[funcName] = protos[funcName];
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function $set(prop, val) {
		if (typeof prop === 'string' && !!val) {
			this[prop] = val;
		} else {
			for (var i in prop) {
				if (i.indexOf('.') == -1) {
					this[i] = prop[i];
				} else {
					var pathObj = i.split(".");
					var c = this;
					for (var k = 0; k < pathObj.length - 1; k++) c = c[pathObj[k]];
					c[pathObj[pathObj.length - 1]] = prop[i];
				}
			}
		}
		return this;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $scale() {
		var x = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
		var y = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		if (!this.scale) return this;
		var scale = this.scale.set ? this.scale.set : this.scale.setTo;

		if (x !== null && y !== null) {
			this.scale.setTo(x, y);
		} else if (x !== null) {
			this.scale.setTo(x);
		}

		return this;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	module.exports = function $tint() {
		var color = arguments.length <= 0 || arguments[0] === undefined ? 'ffffff' : arguments[0];

		this.tint = utils.colorCase(color);
		return this;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $into(group) {
		group.add(this);
		return this;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $mid() {
		this.anchor.setTo(0.5);
		return this;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (target) {
		this.x = target.x;
		this.y = target.y;
		return this;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $fixPos() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $add(objs) {
		var self = this;
		if (!Array.isArray(objs)) objs = [objs];
		objs.forEach(function (obj) {
			self.add(obj);
		});
		return this;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		var a = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
		var b = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		if (a) {
			if (a == 'left') {
				this.x = 0;
			} else if (a == 'center') {
				this.x = ~ ~(this.game.width * 0.5) - (!this.anchor || this.anchor.x == 0 ? this.width * 0.5 : 0);
			} else if (a == 'right') {
				this.x = this.game.width - this.width;
			}
		}
		if (b) {
			if (a == 'top') {
				this.y = 0;
			} else if (a == 'center') {
				this.y = ~ ~(this.game.height * 0.5) - (!this.anchor || this.anchor.y == 0 ? this.height * 0.5 : 0);
			} else if (a == 'bot') {
				this.y = this.game.width - this.height;
			}
		}
		return this;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);
	var Phaser = __webpack_require__(3);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $tileSprite(key, options, width, height) {
		if (typeof options == 'string') options = { frame: options };
		var defaults = {
			x: 0,
			y: 0,
			frame: undefined,
			group: undefined
		};
		options = utils.extend({}, defaults, options);

		var tmpObj = game.add.tileSprite(options.x, options.y, width, height, key, options.frame);
		// prototypes

		// options.group
		bindProto(tmpObj, 'sprite');

		return tmpObj;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $text(text, options) {
		if (typeof options == 'string') options = { frame: options };
		var defaults = {
			x: 0,
			y: 0,
			bold: false,
			size: 15,
			font: "'Helvetica Neue', Helvetica, Arial, sans-serif",
			stroke: {
				size: 0,
				color: '#000000'
			},
			align: 'center',
			color: '#000000'
		};
		options = utils.extend({}, defaults, options);

		var tmpObj = game.add.text(0, 0, text, {
			font: [options.bold ? 'bold' : '', options.size + "px", options.font].join(" "),
			align: options.align,
			fill: options.color,
			stroke: options.stroke.color,
			strokeThickness: options.stroke.size
		});
		// prototypes
		bindProto(tmpObj, 'text');

		return tmpObj;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $circle(options) {
		if (typeof options == 'number') options = { size: options };

		var defaults = {
			x: 0,
			y: 0,
			group: undefined,
			fill: '#ff0000',
			size: 10,
			alpha: 1,
			stroke: {
				size: 0,
				color: '#000',
				alpha: 1
			}
		};
		options = utils.extend({}, defaults, options);
		var tmpG = game.add.graphics(options.x, options.y, options.group);

		bindProto(tmpG, 'graphic');

		if (options.fill) tmpG.beginFill(utils.colorCase(options.fill), options.alpha);
		if (options.stroke.size > 0) tmpG.lineStyle(options.stroke.size, utils.colorCase(options.stroke.color), options.stroke.alpha);
		return tmpG.drawCircle(0, 0, options.size);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $graphic(options) {
		var defaults = {
			x: 0,
			y: 0,
			group: undefined
		};
		options = utils.extend({}, defaults, options);
		var tmpG = game.add.graphics(options.x, options.y, options.group);

		bindProto(tmpG, 'graphic');
		return tmpG;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var $circle = __webpack_require__(19);

	module.exports = function $dot(size, fill, options) {
		if (size === undefined) size = 5;
		if (fill === undefined) fill = '#ff0000';

		var defaults = {
			fill: fill,
			size: size
		};

		options = utils.extend({}, defaults, options);
		return $circle(options);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $rect(options) {
		if (typeof options == 'number') options = { size: options };

		var defaults = {
			x: 0,
			y: 0,
			group: undefined,
			fill: '#ff0000',
			width: 100,
			height: 100,
			size: 0,
			alpha: 1,
			round: 0,
			stroke: {
				size: 0,
				color: '#000000',
				alpha: 1
			}
		};
		options = utils.extend({}, defaults, options);
		var tmpG = game.add.graphics(options.x, options.y, options.group);

		if (options.size) options.height = options.width = options.size;

		bindProto(tmpG, 'graphic');

		if (options.fill) tmpG.beginFill(utils.colorCase(options.fill), options.alpha);
		if (options.stroke.size > 0) tmpG.lineStyle(options.stroke.size, utils.colorCase(options.stroke.color), options.stroke.alpha);

		if (options.round === 0) {
			return tmpG.drawRect(0, 0, options.width, options.height);
		} else {
			return tmpG.drawRoundedRect(0, 0, options.width, options.height, options.round);
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	module.exports = function $group(options) {
		var defaults = {
			parent: undefined,
			name: undefined,
			addToStage: undefined,
			enableBody: undefined,
			physicsBodyType: undefined
		};
		options = utils.extend({}, options, defaults);
		var tmpG = game.add.group(options.parent, options.name, options.addToStage, options.enableBody, options.physicsBodyType);

		bindProto(tmpG, 'group');

		return tmpG;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	var $sprite = __webpack_require__(5);

	module.exports = function $shape(source, frame, options) {
		if (frame === undefined) frame = undefined;

		if (typeof frame === 'object') {
			var tmpVar = options;
			options = frame ? frame : {};
			frame = tmpVar;
		}

		var defaults = {
			frame: frame,
			x: 0,
			y: 0,
			group: undefined,
			cache: true,
			color: '#FF0000'
		};
		options = utils.extend({}, defaults, options);

		var key = ['$fill', source, options.frame].filter(Boolean).join('_');

		if (options.cache && !game.cache.checkImageKey(key)) {
			var bmd = utils.colorShapeBmd(source, options.color, options.frame);
			bmd.generateTexture(key);
			key = bmd;
			bmd.pendingDestroy = true;
		} else if (!options.cache) {
			key = utils.colorShapeBmd(source, options.color, options.frame);
		}

		var newAttr = Object.assign({}, options);
		delete newAttr['cache'];
		delete newAttr['frame'];

		return $sprite(key, newAttr);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bindProto = __webpack_require__(7);

	var _require = __webpack_require__(2);

	var game = _require.game;

	var $sprite = __webpack_require__(5);

	var strokeBmd = function strokeBmd(key, options) {
		var source = game.make.sprite(0, 0, key, options.frame);
		var size = options.size;
		var pixel = options.pixel;

		var bmd = game.make.bitmapData(source.width + size * 2, source.height + size * 2);
		var shape = utils.colorShapeBmd(key, options.color, options.frame);

		for (var i = 0; i < size * 2 * (1 / pixel) + 1; i++) {
			for (var k = 0; k < size * 2 * (1 / pixel) + 1; k++) {
				bmd.draw(shape, i * pixel, k * pixel);
			}
		}

		if (options.inside) bmd.draw(source, size, size, source.texture.crop.width, source.texture.crop.height);
		source.pendingDestroy = true;

		return bmd;
	};

	module.exports = function $stoke(source, frame, options) {
		if (frame === undefined) frame = undefined;

		if (typeof frame === 'object') {
			var tmpVar = options;
			options = frame ? frame : {};
			frame = tmpVar;
		}

		var defaults = {
			frame: frame,
			x: 0,
			y: 0,
			group: undefined,
			cache: true,
			size: 1,
			pixel: 1,
			inside: true,
			color: '#FF0000'
		};
		options = utils.extend({}, defaults, options);

		var key = ['$stoke', source, options.frame].filter(Boolean).join('_');

		if (options.cache && !game.cache.checkImageKey(key)) {
			var bmd = strokeBmd(source, options);
			bmd.generateTexture(key);
			bmd.pendingDestroy = true;
			key = bmd;
		} else if (!options.cache) {
			key = strokeBmd(options);
		}

		var newAttr = Object.assign({}, options);

		['cache', 'color', 'pixel', 'inside', 'frame', 'size'].forEach(function (val) {
			delete newAttr[val];
		});

		return $sprite(key, newAttr);
	};

/***/ }
/******/ ])
});
;