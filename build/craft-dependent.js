(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Phaser"), require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["Phaser", "_"], factory);
	else if(typeof exports === 'object')
		exports["$craft"] = factory(require("Phaser"), require("_"));
	else
		root["$craft"] = factory(root["Phaser"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
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

	if (!Phaser) var Phaser = __webpack_require__(2);

	module.exports = function $craft(game) {
		var self = {};

		self.$sprite = __webpack_require__(3)(game, Phaser);
		self.$circle = self.$c = __webpack_require__(16)(game, Phaser);
		self.$graphic = __webpack_require__(17)(game, Phaser);
		self.$dot = self.$d = __webpack_require__(18)(game, Phaser);
		self.$rect = self.$box = __webpack_require__(19)(game, Phaser);
		self.$group = self.$g = __webpack_require__(20)(game, Phaser);

		return self;
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

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(6);

	module.exports = function (game, Phaser) {
		return function $sprite(key, options) {
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
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var self = {};

	if (!Phaser) var Phaser = __webpack_require__(2);
	if (false) {
		var _ = require('./customLodash');
	} else {
		var _ = __webpack_require__(5);
	}

	self.colorCase = function (color) {
		return color.indexOf('#') != -1 ? '0x' + color.replace(/#/g, '') : color;
	};

	self.extend = Phaser.Utils.extend.bind(null, true); // always deep;

	self.each = _.each;
	self.isArray = _.isArray;

	module.exports = self;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var protoOptions = __webpack_require__(1);
	var protos = {
		$set: __webpack_require__(7),
		$scale: __webpack_require__(8),
		$tint: __webpack_require__(9),
		$into: __webpack_require__(10),
		$mid: __webpack_require__(11),
		$copyPos: __webpack_require__(12),
		$fixPos: __webpack_require__(13),
		$add: __webpack_require__(14),
		$align: __webpack_require__(15)
	};

	module.exports = function bindProto(obj) {
		var type = arguments.length <= 1 || arguments[1] === undefined ? 'sprite' : arguments[1];

		utils.each(protoOptions[type], function (val, funcName) {
			if (!val || !protos[funcName]) return;
			obj[funcName] = protos[funcName];
		});
	};

/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = function $tint() {
		var color = arguments.length <= 0 || arguments[0] === undefined ? 'ffffff' : arguments[0];

		this.tint = utils.colorCase(color);
		return this;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $into(group) {
		group.add(this);
		return this;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $mid() {
		this.anchor.setTo(0.5);
		return this;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (target) {
		this.x = target.x;
		this.y = target.y;
		return this;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $fixPos() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = function $add(objs) {
		var self = this;
		if (!utils.isArray(objs)) objs = [objs];
		utils.each(objs, function (obj) {
			self.add(obj);
		});
		return this;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(6);

	module.exports = function (game, Phaser) {
		return function $circle(options) {
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
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(6);

	module.exports = function (game, Phaser) {
		return function $graphic(options) {
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
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(6);

	module.exports = function (game, Phaser) {
		var $circle = __webpack_require__(16)(game, Phaser);

		return function $dot(size, fill, options) {
			if (size === undefined) size = 5;
			if (fill === undefined) fill = '#ff0000';

			var defaults = {
				fill: fill,
				size: size
			};

			options = utils.extend({}, defaults, options);
			return $circle(options);
		};
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(6);

	module.exports = function (game, Phaser) {
		return function $rect(options) {
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
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(6);

	module.exports = function (game, Phaser) {
		return function $group(options) {
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
	};

/***/ }
/******/ ])
});
;