(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Phaser"));
	else if(typeof define === 'function' && define.amd)
		define("craft", ["Phaser"], factory);
	else if(typeof exports === 'object')
		exports["craft"] = factory(require("Phaser"));
	else
		root["craft"] = factory(root["Phaser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var self = {};
var Phaser = __webpack_require__(3);

var _require = __webpack_require__(1);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var protoOptions = __webpack_require__(5);
var protos = {
	$set: __webpack_require__(9),
	$scale: __webpack_require__(10),
	$tint: __webpack_require__(11),
	$into: __webpack_require__(12),
	$mid: __webpack_require__(13),
	$copyPos: __webpack_require__(14),
	$fixPos: __webpack_require__(15),
	$add: __webpack_require__(16),
	$align: __webpack_require__(17)
};

module.exports = function bindProto(obj) {
	var type = arguments.length <= 1 || arguments[1] === undefined ? 'sprite' : arguments[1];

	for (var funcName in protoOptions[type]) {
		if (!protoOptions[type][funcName] || !protos[funcName]) continue;

		obj[funcName] = protos[funcName];
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protoOptions = __webpack_require__(5);
var scope = __webpack_require__(1);
var Phaser = __webpack_require__(3);
var version = __webpack_require__(8);

console.log('%c Craft v' + version + ' ', 'background: #002874; color: #ffffff');

module.exports = function $craft(game) {
	var self = {};

	scope.game = game;

	return [{
		name: '$sprite',
		method: __webpack_require__(4),
		aliases: ['$s']
	}, {
		name: '$tileSprite',
		method: __webpack_require__(18)
	}, {
		name: '$text',
		method: __webpack_require__(19),
		aliases: ['$t']
	}, {
		name: '$circle',
		method: __webpack_require__(6),
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
	}].reduce(function (self, val, i) {
		var method = self[val.name] = val.method;

		if (val.aliases) {
			val.aliases.forEach(function (alias) {
				self[alias] = method;
			});
		}

		return self;
	}, self);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "2.0.1";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function $set(prop, val) {
	if (typeof prop === 'string' && !!val) {
		this[prop] = val;
	} else {
		Object.assign(this, prop);
	}
	return this;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function $tint() {
	var color = arguments.length <= 0 || arguments[0] === undefined ? 'ffffff' : arguments[0];

	this.tint = utils.colorCase(color);
	return this;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function $into(group) {
	group.add(this);
	return this;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function $mid() {
	this.anchor.setTo(0.5);
	return this;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (target) {
	this.x = target.x;
	this.y = target.y;
	return this;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function $fixPos() {
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	return this;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function $add(objs) {
	var self = this;
	if (!Array.isArray(objs)) objs = [objs];
	objs.forEach(function (obj) {
		self.add(obj);
	});
	return this;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);
var Phaser = __webpack_require__(3);

var _require = __webpack_require__(1);

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var $circle = __webpack_require__(6);

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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

var game = _require.game;

var $sprite = __webpack_require__(4);

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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bindProto = __webpack_require__(2);

var _require = __webpack_require__(1);

var game = _require.game;

var $sprite = __webpack_require__(4);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMjY3OWU0ZWRkOWM2N2NkNmFkYyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90b3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUGhhc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGhvZHMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWV0aG9kcy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92ZXJzaW9uLmpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvdHlwZXMvc2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90b3R5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90b3R5cGVzL3RpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvdHlwZXMvaW50by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG90eXBlcy9taWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvdHlwZXMvY29weVBvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG90eXBlcy9maXhQb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvdHlwZXMvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90b3R5cGVzL2FsaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXRob2RzL3RpbGVTcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGhvZHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWV0aG9kcy9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXRob2RzL2RvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWV0aG9kcy9yZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tZXRob2RzL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXRob2RzL3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXRob2RzL3N0cm9rZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsQ0FBUSxDQUFDLENBQUM7O2VBQ2xCLG1CQUFPLENBQUMsQ0FBUyxDQUFDOztJQUExQixJQUFJLFlBQUosSUFBSTs7QUFFVCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVMsS0FBSyxFQUFDO0FBQy9CLFFBQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQ3RFOztBQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFN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QUFDO0VBQ3pCOztBQUVELEtBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QyxFQUNDLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsTUFBTSxDQUNOLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFDO0FBQ3RCLFNBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDO0VBQ3JCLENBQUM7O0FBRUYsUUFBTyxPQUFPLENBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzVCLEMiLCJmaWxlIjoiYnVpbGQvY3JhZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQaGFzZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjcmFmdFwiLCBbXCJQaGFzZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3JhZnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQaGFzZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNyYWZ0XCJdID0gZmFjdG9yeShyb290W1wiUGhhc2VyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQyNjc5ZTRlZGQ5YzY3Y2Q2YWRjIiwidmFyIHNlbGYgPSB7fTtcbnZhciBQaGFzZXIgPSByZXF1aXJlKCdwaGFzZXInKTtcbnZhciB7Z2FtZX0gPSByZXF1aXJlKCcuL3Njb3BlJyk7XG5cbnNlbGYuY29sb3JDYXNlID0gZnVuY3Rpb24oY29sb3Ipe1xuXHRyZXR1cm4gY29sb3IuaW5kZXhPZignIycpICE9IC0xID8gJzB4Jytjb2xvci5yZXBsYWNlKC8jL2csJycpIDogY29sb3I7XG59XG5cbnNlbGYuZXh0ZW5kID0gUGhhc2VyLlV0aWxzLmV4dGVuZC5iaW5kKG51bGwsdHJ1ZSkgLy8gYWx3YXlzIGRlZXA7XG5cbnNlbGYuY29sb3JTaGFwZUJtZCA9IGZ1bmN0aW9uKGtleSwgY29sb3JIZXgsIGZyYW1lPXVuZGVmaW5lZCkge1xuXHR2YXIgc291cmNlID0gZ2FtZS5tYWtlLnNwcml0ZSgwLDAsa2V5LGZyYW1lKTtcblxuXHR2YXIgY29sb3IgPSBQaGFzZXIuQ29sb3IuaGV4VG9Db2xvcihjb2xvckhleCk7XG5cblx0dmFyIHRleHR1cmUgPSBnYW1lLm1ha2UuYml0bWFwRGF0YShzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQpO1xuXHR0ZXh0dXJlLmZpbGwoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG5cblx0dmFyIGJtZCA9IHRleHR1cmU7XG5cdGJtZC5ibGVuZERlc3RpbmF0aW9uQXRvcCgpO1xuXHRibWQuZHJhdyhzb3VyY2UsIDAsIDAsIHNvdXJjZS50ZXh0dXJlLmNyb3Aud2lkdGgsIHNvdXJjZS50ZXh0dXJlLmNyb3AuaGVpZ2h0KTtcblxuXHRzb3VyY2UucGVuZGluZ0Rlc3Ryb3kgPSB0cnVlO1xuXG5cdHJldHVybiBibWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NvcGUuanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgcHJvdG9PcHRpb25zID0gcmVxdWlyZSgnLi9zZXR1cCcpO1xudmFyIHByb3RvcyA9IHtcblx0JHNldDpyZXF1aXJlKCcuL3Byb3RvdHlwZXMvc2V0JyksXG5cdCRzY2FsZTpyZXF1aXJlKCcuL3Byb3RvdHlwZXMvc2NhbGUnKSxcblx0JHRpbnQ6cmVxdWlyZSgnLi9wcm90b3R5cGVzL3RpbnQnKSxcblx0JGludG86cmVxdWlyZSgnLi9wcm90b3R5cGVzL2ludG8nKSxcblx0JG1pZDpyZXF1aXJlKCcuL3Byb3RvdHlwZXMvbWlkJyksXG5cdCRjb3B5UG9zOnJlcXVpcmUoJy4vcHJvdG90eXBlcy9jb3B5UG9zJyksXG5cdCRmaXhQb3M6cmVxdWlyZSgnLi9wcm90b3R5cGVzL2ZpeFBvcycpLFxuXHQkYWRkOnJlcXVpcmUoJy4vcHJvdG90eXBlcy9hZGQnKSxcblx0JGFsaWduOnJlcXVpcmUoJy4vcHJvdG90eXBlcy9hbGlnbicpLFxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZFByb3RvKG9iaix0eXBlPSdzcHJpdGUnKXtcblx0Zm9yKHZhciBmdW5jTmFtZSBpbiBwcm90b09wdGlvbnNbdHlwZV0pe1xuXHRcdGlmKCFwcm90b09wdGlvbnNbdHlwZV1bZnVuY05hbWVdIHx8ICFwcm90b3NbZnVuY05hbWVdKSBjb250aW51ZTtcblxuXHRcdG9ialtmdW5jTmFtZV0gPSBwcm90b3NbZnVuY05hbWVdO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdG9zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlBoYXNlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgYmluZFByb3RvID0gcmVxdWlyZSgnLi4vcHJvdG9zJyk7XG52YXIge2dhbWV9ID0gcmVxdWlyZSgnLi4vc2NvcGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkc3ByaXRlKGtleSxvcHRpb25zKXtcblx0aWYodHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7ZnJhbWU6b3B0aW9uc307XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHR4OjAsXG5cdFx0eTowLFxuXHRcdGZyYW1lOnVuZGVmaW5lZCxcblx0XHRncm91cDp1bmRlZmluZWRcblx0fTtcblx0b3B0aW9ucyA9IHV0aWxzLmV4dGVuZCh7fSxkZWZhdWx0cyxvcHRpb25zKTtcblx0dmFyIHRtcE9iaiA9IGdhbWUuYWRkLnNwcml0ZShvcHRpb25zLngsb3B0aW9ucy55LGtleSxvcHRpb25zLmZyYW1lLG9wdGlvbnMuZ3JvdXApO1xuXHQvLyBwcm90b3R5cGVzXG5cdGJpbmRQcm90byh0bXBPYmosJ3Nwcml0ZScpXG5cblx0cmV0dXJuIHRtcE9iajtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXRob2RzL3Nwcml0ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRzcHJpdGU6e1xuXHRcdCRzZXQ6dHJ1ZSxcblx0XHQkdGludDp0cnVlLFxuXHRcdCRpbnRvOnRydWUsXG5cdFx0JG1pZDp0cnVlLFxuXHRcdCRzY2FsZTp0cnVlLFxuXHRcdCRhdGxhc0ltZzp0cnVlLFxuXHRcdCRhdGxhc0FuaW1zOnRydWUsXG5cdFx0JGZpeFBvczp0cnVlLFxuXHRcdCRjb3B5UG9zOnRydWUsXG5cdFx0JGFsaWduOnRydWUsXG5cdH0sXG5cdGdyYXBoaWM6e1xuXHRcdCRzZXQ6dHJ1ZSxcblx0XHQkdGludDp0cnVlLFxuXHRcdCRpbnRvOnRydWUsXG5cdFx0JHNjYWxlOnRydWUsXG5cdFx0JG1pZDp0cnVlLFxuXHRcdCRmaXhQb3M6dHJ1ZSxcblx0XHQkY29weVBvczp0cnVlLFxuXHRcdCRhbGlnbjp0cnVlLFxuXHR9LFxuXHR0ZXh0Ontcblx0XHQkc2V0OnRydWUsXG5cdFx0JHRpbnQ6dHJ1ZSxcblx0XHQkaW50bzp0cnVlLFxuXHRcdCRzY2FsZTp0cnVlLFxuXHRcdCRmaXhQb3M6dHJ1ZSxcblx0XHQkY29weVBvczp0cnVlLFxuXHRcdCRhbGlnbjp0cnVlLFxuXHR9LFxuXHRncm91cDp7XG5cdFx0JHNldDp0cnVlLFxuXHRcdCRpbnRvOnRydWUsXG5cdFx0JGZpeFBvczp0cnVlLFxuXHRcdCRzY2FsZTp0cnVlLFxuXHRcdCRhZGQ6dHJ1ZSxcblx0XHQkY29weVBvczp0cnVlLFxuXHRcdCRhbGlnbjp0cnVlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2V0dXAuanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIGJpbmRQcm90byA9IHJlcXVpcmUoJy4uL3Byb3RvcycpO1xudmFyIHtnYW1lfSA9IHJlcXVpcmUoJy4uL3Njb3BlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gJGNpcmNsZShvcHRpb25zKXtcblx0aWYodHlwZW9mIG9wdGlvbnM9PSdudW1iZXInKSBvcHRpb25zID0ge3NpemU6b3B0aW9uc307XG5cblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdHg6MCxcblx0XHR5OjAsXG5cdFx0Z3JvdXA6dW5kZWZpbmVkLFxuXHRcdGZpbGw6JyNmZjAwMDAnLFxuXHRcdHNpemU6MTAsXG5cdFx0YWxwaGE6MSxcblx0XHRzdHJva2U6e1xuXHRcdFx0c2l6ZTowLFxuXHRcdFx0Y29sb3I6JyMwMDAnLFxuXHRcdFx0YWxwaGE6MSxcblx0XHR9LFxuXHR9O1xuXHRvcHRpb25zID0gdXRpbHMuZXh0ZW5kKHt9LGRlZmF1bHRzLG9wdGlvbnMpO1xuXHR2YXIgdG1wRyA9IGdhbWUuYWRkLmdyYXBoaWNzKG9wdGlvbnMueCxvcHRpb25zLnksb3B0aW9ucy5ncm91cCk7XG5cblx0YmluZFByb3RvKHRtcEcsJ2dyYXBoaWMnKVxuXG5cdGlmKG9wdGlvbnMuZmlsbCkgdG1wRy5iZWdpbkZpbGwodXRpbHMuY29sb3JDYXNlKG9wdGlvbnMuZmlsbCksb3B0aW9ucy5hbHBoYSk7XG5cdGlmKG9wdGlvbnMuc3Ryb2tlLnNpemU+MCkgdG1wRy5saW5lU3R5bGUob3B0aW9ucy5zdHJva2Uuc2l6ZSx1dGlscy5jb2xvckNhc2Uob3B0aW9ucy5zdHJva2UuY29sb3IpLG9wdGlvbnMuc3Ryb2tlLmFscGhhKTtcblx0cmV0dXJuIHRtcEcuZHJhd0NpcmNsZSgwLDAsb3B0aW9ucy5zaXplKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21ldGhvZHMvY2lyY2xlLmpzIiwidmFyIHByb3RvT3B0aW9ucyA9IHJlcXVpcmUoJy4vc2V0dXAnKTtcbnZhciBzY29wZSA9IHJlcXVpcmUoJy4vc2NvcGUnKTtcbnZhciBQaGFzZXIgPSByZXF1aXJlKCdwaGFzZXInKTtcbnZhciB2ZXJzaW9uID0gcmVxdWlyZSgnLi92ZXJzaW9uLmpzb24nKTtcblxuY29uc29sZS5sb2coJyVjIENyYWZ0IHYnK3ZlcnNpb24rJyAnLCAnYmFja2dyb3VuZDogIzAwMjg3NDsgY29sb3I6ICNmZmZmZmYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkY3JhZnQoZ2FtZSl7XG5cdHZhciBzZWxmID0ge307XG5cblx0c2NvcGUuZ2FtZSA9IGdhbWU7XG5cblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRuYW1lOickc3ByaXRlJyxcblx0XHRcdG1ldGhvZDpyZXF1aXJlKCcuL21ldGhvZHMvc3ByaXRlJyksXG5cdFx0XHRhbGlhc2VzOlsnJHMnXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6JyR0aWxlU3ByaXRlJyxcblx0XHRcdG1ldGhvZDpyZXF1aXJlKCcuL21ldGhvZHMvdGlsZVNwcml0ZScpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTonJHRleHQnLFxuXHRcdFx0bWV0aG9kOnJlcXVpcmUoJy4vbWV0aG9kcy90ZXh0JyksXG5cdFx0XHRhbGlhc2VzOlsnJHQnXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6JyRjaXJjbGUnLFxuXHRcdFx0bWV0aG9kOnJlcXVpcmUoJy4vbWV0aG9kcy9jaXJjbGUnKSxcblx0XHRcdGFsaWFzZXM6WyckdCddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTonJGdyYXBoaWMnLFxuXHRcdFx0bWV0aG9kOnJlcXVpcmUoJy4vbWV0aG9kcy9ncmFwaGljJyksXG5cdFx0XHRhbGlhc2VzOlsnJHQnXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6JyRkb3QnLFxuXHRcdFx0bWV0aG9kOnJlcXVpcmUoJy4vbWV0aG9kcy9kb3QnKSxcblx0XHRcdGFsaWFzZXM6WyckZCddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTonJHJlY3QnLFxuXHRcdFx0bWV0aG9kOnJlcXVpcmUoJy4vbWV0aG9kcy9yZWN0JyksXG5cdFx0XHRhbGlhc2VzOlsnJGJveCddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTonJGdyb3VwJyxcblx0XHRcdG1ldGhvZDpyZXF1aXJlKCcuL21ldGhvZHMvZ3JvdXAnKSxcblx0XHRcdGFsaWFzZXM6WyckZyddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTonJHNoYXBlJyxcblx0XHRcdG1ldGhvZDpyZXF1aXJlKCcuL21ldGhvZHMvc2hhcGUnKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6JyRzdHJva2UnLFxuXHRcdFx0bWV0aG9kOnJlcXVpcmUoJy4vbWV0aG9kcy9zdHJva2UnKSxcblx0XHR9LFxuXHRdLnJlZHVjZShmdW5jdGlvbihzZWxmLHZhbCxpKXtcblx0XHR2YXIgbWV0aG9kID0gc2VsZlt2YWwubmFtZV0gPSB2YWwubWV0aG9kO1xuXG5cdFx0aWYodmFsLmFsaWFzZXMpe1xuXHRcdFx0dmFsLmFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbihhbGlhcyl7XG5cdFx0XHRcdHNlbGZbYWxpYXNdID0gbWV0aG9kO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGY7XG5cdH0sc2VsZilcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIyLjAuMVwiXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVyc2lvbi5qc29uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkc2V0KHByb3AsdmFsKXtcblx0aWYodHlwZW9mIHByb3A9PT0nc3RyaW5nJyAmJiAhIXZhbCl7XG5cdFx0dGhpc1twcm9wXT12YWw7XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLHByb3ApO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3RvdHlwZXMvc2V0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkc2NhbGUoeD1udWxsLHk9bnVsbCl7XG5cdGlmKCF0aGlzLnNjYWxlKSByZXR1cm4gdGhpcztcblx0dmFyIHNjYWxlID0gdGhpcy5zY2FsZS5zZXQgPyB0aGlzLnNjYWxlLnNldCA6IHRoaXMuc2NhbGUuc2V0VG87XG5cblx0aWYoeCE9PW51bGwgJiYgeSE9PW51bGwpe1xuXHRcdHRoaXMuc2NhbGUuc2V0VG8oeCx5KTtcblx0fSBlbHNlIGlmKHghPT1udWxsKSB7XG5cdFx0dGhpcy5zY2FsZS5zZXRUbyh4KTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3RvdHlwZXMvc2NhbGUuanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICR0aW50KGNvbG9yPSdmZmZmZmYnKXtcblx0dGhpcy50aW50ID0gdXRpbHMuY29sb3JDYXNlKGNvbG9yKTtcblx0cmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdG90eXBlcy90aW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkaW50byhncm91cCl7XG5cdGdyb3VwLmFkZCh0aGlzKTtcblx0cmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdG90eXBlcy9pbnRvLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkbWlkKCl7XG5cdHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3RvdHlwZXMvbWlkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQpe1xuXHR0aGlzLnggPSB0YXJnZXQueDtcblx0dGhpcy55ID0gdGFyZ2V0Lnk7XG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3RvdHlwZXMvY29weVBvcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gJGZpeFBvcygpe1xuXHR0aGlzLnggPSBNYXRoLmZsb29yKHRoaXMueCk7XG5cdHRoaXMueSA9IE1hdGguZmxvb3IodGhpcy55KTtcblx0cmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdG90eXBlcy9maXhQb3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICRhZGQob2Jqcyl7XG5cdHZhciBzZWxmID0gdGhpcztcblx0aWYoIUFycmF5LmlzQXJyYXkob2JqcykpIG9ianMgPSBbb2Jqc107XG5cdG9ianMuZm9yRWFjaChmdW5jdGlvbihvYmope1xuXHRcdHNlbGYuYWRkKG9iaik7XG5cdH0pXG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3RvdHlwZXMvYWRkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhPW51bGwsYj1udWxsKXtcblx0aWYoYSl7XG5cdFx0aWYoYT09J2xlZnQnKXtcblx0XHRcdHRoaXMueCA9IDA7XG5cdFx0fSBlbHNlIGlmKGE9PSdjZW50ZXInKXtcblx0XHRcdHRoaXMueCA9IH5+KHRoaXMuZ2FtZS53aWR0aCowLjUpLSghdGhpcy5hbmNob3IgfHwgdGhpcy5hbmNob3IueD09MCA/IHRoaXMud2lkdGgqMC41IDogMCk7XG5cdFx0fSBlbHNlIGlmKGE9PSdyaWdodCcpe1xuXHRcdFx0dGhpcy54ID0gdGhpcy5nYW1lLndpZHRoLXRoaXMud2lkdGg7XG5cdFx0fVxuXHR9XG5cdGlmKGIpe1xuXHRcdGlmKGE9PSd0b3AnKXtcblx0XHRcdHRoaXMueSA9IDA7XG5cdFx0fSBlbHNlIGlmKGE9PSdjZW50ZXInKXtcblx0XHRcdHRoaXMueSA9IH5+KHRoaXMuZ2FtZS5oZWlnaHQqMC41KS0oIXRoaXMuYW5jaG9yIHx8IHRoaXMuYW5jaG9yLnk9PTAgPyB0aGlzLmhlaWdodCowLjUgOiAwKTtcblx0XHR9IGVsc2UgaWYoYT09J2JvdCcpe1xuXHRcdFx0dGhpcy55ID0gdGhpcy5nYW1lLndpZHRoLXRoaXMuaGVpZ2h0O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm90b3R5cGVzL2FsaWduLmpzIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBiaW5kUHJvdG8gPSByZXF1aXJlKCcuLi9wcm90b3MnKTtcbnZhciBQaGFzZXIgPSByZXF1aXJlKCdwaGFzZXInKTtcbnZhciB7Z2FtZX0gPSByZXF1aXJlKCcuLi9zY29wZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICR0aWxlU3ByaXRlKGtleSxvcHRpb25zLHdpZHRoLGhlaWdodCl7XG5cdGlmKHR5cGVvZiBvcHRpb25zID09ICdzdHJpbmcnKSBvcHRpb25zID0ge2ZyYW1lOm9wdGlvbnN9O1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0eDowLFxuXHRcdHk6MCxcblx0XHRmcmFtZTp1bmRlZmluZWQsXG5cdFx0Z3JvdXA6dW5kZWZpbmVkXG5cdH07XG5cdG9wdGlvbnMgPSB1dGlscy5leHRlbmQoe30sZGVmYXVsdHMsb3B0aW9ucyk7XG5cblx0dmFyIHRtcE9iaiA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoXG5cdFx0b3B0aW9ucy54LFxuXHRcdG9wdGlvbnMueSxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHQsXG5cdFx0a2V5LFxuXHRcdG9wdGlvbnMuZnJhbWUsXG5cdFx0Ly8gb3B0aW9ucy5ncm91cFxuXHQpO1xuXHQvLyBwcm90b3R5cGVzXG5cdGJpbmRQcm90byh0bXBPYmosJ3Nwcml0ZScpXG5cblx0cmV0dXJuIHRtcE9iajtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXRob2RzL3RpbGVTcHJpdGUuanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIGJpbmRQcm90byA9IHJlcXVpcmUoJy4uL3Byb3RvcycpO1xudmFyIHtnYW1lfSA9IHJlcXVpcmUoJy4uL3Njb3BlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gJHRleHQodGV4dCxvcHRpb25zKXtcblx0aWYodHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7ZnJhbWU6b3B0aW9uc307XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHR4OjAsXG5cdFx0eTowLFxuXHRcdGJvbGQ6ZmFsc2UsXG5cdFx0c2l6ZToxNSxcblx0XHRmb250OlwiJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuXHRcdHN0cm9rZTp7XG5cdFx0XHRzaXplOjAsXG5cdFx0XHRjb2xvcjonIzAwMDAwMCdcblx0XHR9LFxuXHRcdGFsaWduOidjZW50ZXInLFxuXHRcdGNvbG9yOicjMDAwMDAwJyxcblx0fTtcblx0b3B0aW9ucyA9IHV0aWxzLmV4dGVuZCh7fSxkZWZhdWx0cyxvcHRpb25zKTtcblxuXHR2YXIgdG1wT2JqID0gZ2FtZS5hZGQudGV4dChcblx0XHQwLFxuXHRcdDAsXG5cdFx0dGV4dCxcblx0XHR7XG5cdFx0XHRmb250OiBbXG5cdFx0XHRcdChvcHRpb25zLmJvbGQgPyAnYm9sZCcgOiAnJyksXG5cdFx0XHRcdG9wdGlvbnMuc2l6ZStcInB4XCIsXG5cdFx0XHRcdG9wdGlvbnMuZm9udCxcblx0XHRcdF0uam9pbihcIiBcIiksXG5cdFx0XHRhbGlnbjpvcHRpb25zLmFsaWduLFxuXHRcdFx0ZmlsbDpvcHRpb25zLmNvbG9yLFxuXHRcdFx0c3Ryb2tlOm9wdGlvbnMuc3Ryb2tlLmNvbG9yLFxuXHRcdFx0c3Ryb2tlVGhpY2tuZXNzOm9wdGlvbnMuc3Ryb2tlLnNpemUsXG5cdFx0fVxuXHQpO1xuXHQvLyBwcm90b3R5cGVzXG5cdGJpbmRQcm90byh0bXBPYmosJ3RleHQnKTtcblxuXHRyZXR1cm4gdG1wT2JqO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21ldGhvZHMvdGV4dC5qcyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgYmluZFByb3RvID0gcmVxdWlyZSgnLi4vcHJvdG9zJyk7XG52YXIge2dhbWV9ID0gcmVxdWlyZSgnLi4vc2NvcGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkZ3JhcGhpYyhvcHRpb25zKXtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdHg6MCxcblx0XHR5OjAsXG5cdFx0Z3JvdXA6dW5kZWZpbmVkLFxuXHR9O1xuXHRvcHRpb25zID0gdXRpbHMuZXh0ZW5kKHt9LGRlZmF1bHRzLG9wdGlvbnMpO1xuXHR2YXIgdG1wRyA9IGdhbWUuYWRkLmdyYXBoaWNzKG9wdGlvbnMueCxvcHRpb25zLnksb3B0aW9ucy5ncm91cCk7XG5cblx0YmluZFByb3RvKHRtcEcsJ2dyYXBoaWMnKTtcblx0cmV0dXJuIHRtcEc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWV0aG9kcy9ncmFwaGljLmpzIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciAkY2lyY2xlID0gcmVxdWlyZSgnLi9jaXJjbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkZG90KHNpemU9NSxmaWxsPScjZmYwMDAwJyxvcHRpb25zKXtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdGZpbGwsXG5cdFx0c2l6ZSxcblx0fTtcblxuXHRvcHRpb25zID0gdXRpbHMuZXh0ZW5kKHt9LGRlZmF1bHRzLG9wdGlvbnMpO1xuXHRyZXR1cm4gJGNpcmNsZShvcHRpb25zKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXRob2RzL2RvdC5qcyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgYmluZFByb3RvID0gcmVxdWlyZSgnLi4vcHJvdG9zJyk7XG52YXIge2dhbWV9ID0gcmVxdWlyZSgnLi4vc2NvcGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAkcmVjdChvcHRpb25zKXtcblx0aWYodHlwZW9mIG9wdGlvbnM9PSdudW1iZXInKSBvcHRpb25zID0ge3NpemU6b3B0aW9uc307XG5cblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdHg6MCxcblx0XHR5OjAsXG5cdFx0Z3JvdXA6dW5kZWZpbmVkLFxuXHRcdGZpbGw6JyNmZjAwMDAnLFxuXHRcdHdpZHRoOjEwMCxcblx0XHRoZWlnaHQ6MTAwLFxuXHRcdHNpemU6MCxcblx0XHRhbHBoYToxLFxuXHRcdHJvdW5kOjAsXG5cdFx0c3Ryb2tlOntcblx0XHRcdHNpemU6MCxcblx0XHRcdGNvbG9yOicjMDAwMDAwJyxcblx0XHRcdGFscGhhOjEsXG5cdFx0fSxcblx0fTtcblx0b3B0aW9ucyA9IHV0aWxzLmV4dGVuZCh7fSxkZWZhdWx0cyxvcHRpb25zKTtcblx0dmFyIHRtcEcgPSBnYW1lLmFkZC5ncmFwaGljcyhvcHRpb25zLngsb3B0aW9ucy55LG9wdGlvbnMuZ3JvdXApO1xuXG5cdGlmKG9wdGlvbnMuc2l6ZSkgb3B0aW9ucy5oZWlnaHQgPSBvcHRpb25zLndpZHRoID0gb3B0aW9ucy5zaXplO1xuXG5cdGJpbmRQcm90byh0bXBHLCdncmFwaGljJylcblxuXHRpZihvcHRpb25zLmZpbGwpIHRtcEcuYmVnaW5GaWxsKHV0aWxzLmNvbG9yQ2FzZShvcHRpb25zLmZpbGwpLG9wdGlvbnMuYWxwaGEpO1xuXHRpZihvcHRpb25zLnN0cm9rZS5zaXplPjApIHRtcEcubGluZVN0eWxlKG9wdGlvbnMuc3Ryb2tlLnNpemUsdXRpbHMuY29sb3JDYXNlKG9wdGlvbnMuc3Ryb2tlLmNvbG9yKSxvcHRpb25zLnN0cm9rZS5hbHBoYSk7XG5cblx0aWYob3B0aW9ucy5yb3VuZD09PTApe1xuXHRcdHJldHVybiB0bXBHLmRyYXdSZWN0KDAsMCxvcHRpb25zLndpZHRoLG9wdGlvbnMuaGVpZ2h0KVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0bXBHLmRyYXdSb3VuZGVkUmVjdCgwLDAsb3B0aW9ucy53aWR0aCxvcHRpb25zLmhlaWdodCxvcHRpb25zLnJvdW5kKVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWV0aG9kcy9yZWN0LmpzIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBiaW5kUHJvdG8gPSByZXF1aXJlKCcuLi9wcm90b3MnKTtcbnZhciB7Z2FtZX0gPSByZXF1aXJlKCcuLi9zY29wZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICRncm91cChvcHRpb25zKXtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdHBhcmVudDp1bmRlZmluZWQsXG5cdFx0bmFtZTp1bmRlZmluZWQsXG5cdFx0YWRkVG9TdGFnZTp1bmRlZmluZWQsXG5cdFx0ZW5hYmxlQm9keTp1bmRlZmluZWQsXG5cdFx0cGh5c2ljc0JvZHlUeXBlOnVuZGVmaW5lZFxuXHR9O1xuXHRvcHRpb25zID0gdXRpbHMuZXh0ZW5kKHt9LG9wdGlvbnMsZGVmYXVsdHMpO1xuXHR2YXIgdG1wRyA9IGdhbWUuYWRkLmdyb3VwKG9wdGlvbnMucGFyZW50LCBvcHRpb25zLm5hbWUsIG9wdGlvbnMuYWRkVG9TdGFnZSwgb3B0aW9ucy5lbmFibGVCb2R5LCBvcHRpb25zLnBoeXNpY3NCb2R5VHlwZSk7XG5cblx0YmluZFByb3RvKHRtcEcsJ2dyb3VwJylcblxuXHRyZXR1cm4gdG1wRztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXRob2RzL2dyb3VwLmpzIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBiaW5kUHJvdG8gPSByZXF1aXJlKCcuLi9wcm90b3MnKTtcbnZhciB7Z2FtZX0gPSByZXF1aXJlKCcuLi9zY29wZScpO1xudmFyICRzcHJpdGUgPSByZXF1aXJlKCcuL3Nwcml0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICRzaGFwZShzb3VyY2UsIGZyYW1lPXVuZGVmaW5lZCwgb3B0aW9ucyl7XG5cdGlmKHR5cGVvZiBmcmFtZT09PSdvYmplY3QnKSB7XG5cdFx0dmFyIHRtcFZhciA9IG9wdGlvbnM7XG5cdFx0b3B0aW9ucyA9IGZyYW1lID8gZnJhbWUgOiB7fTtcblx0XHRmcmFtZSA9IHRtcFZhcjtcblx0fVxuXG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRmcmFtZSxcblx0XHR4OjAsXG5cdFx0eTowLFxuXHRcdGdyb3VwOnVuZGVmaW5lZCxcblx0XHRjYWNoZTp0cnVlLFxuXHRcdGNvbG9yOicjRkYwMDAwJ1xuXHR9O1xuXHRvcHRpb25zID0gdXRpbHMuZXh0ZW5kKHt9LGRlZmF1bHRzLG9wdGlvbnMpO1xuXG5cdHZhciBrZXkgPSBbJyRmaWxsJyxzb3VyY2Usb3B0aW9ucy5mcmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ18nKVxuXG5cdGlmKG9wdGlvbnMuY2FjaGUgJiYgIWdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleShrZXkpKXtcblx0XHR2YXIgYm1kID0gdXRpbHMuY29sb3JTaGFwZUJtZChzb3VyY2UsIG9wdGlvbnMuY29sb3IsIG9wdGlvbnMuZnJhbWUpO1xuXHRcdGJtZC5nZW5lcmF0ZVRleHR1cmUoa2V5KTtcblx0XHRrZXkgPSBibWQ7XG5cdFx0Ym1kLnBlbmRpbmdEZXN0cm95ID0gdHJ1ZTtcblx0fSBlbHNlIGlmKCFvcHRpb25zLmNhY2hlKXtcblx0XHRrZXkgPSB1dGlscy5jb2xvclNoYXBlQm1kKHNvdXJjZSwgb3B0aW9ucy5jb2xvciwgb3B0aW9ucy5mcmFtZSk7XG5cdH1cblxuXG5cdHZhciBuZXdBdHRyID0gT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zKTtcblx0ZGVsZXRlKG5ld0F0dHJbJ2NhY2hlJ10pO1xuXHRkZWxldGUobmV3QXR0clsnZnJhbWUnXSk7XG5cblx0cmV0dXJuICRzcHJpdGUoa2V5LG5ld0F0dHIpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21ldGhvZHMvc2hhcGUuanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIGJpbmRQcm90byA9IHJlcXVpcmUoJy4uL3Byb3RvcycpO1xudmFyIHtnYW1lfSA9IHJlcXVpcmUoJy4uL3Njb3BlJyk7XG52YXIgJHNwcml0ZSA9IHJlcXVpcmUoJy4vc3ByaXRlJyk7XG5cbnZhciBzdHJva2VCbWQgPSBmdW5jdGlvbihrZXksIG9wdGlvbnMpe1xuXHR2YXIgc291cmNlID0gZ2FtZS5tYWtlLnNwcml0ZSgwLDAsa2V5LG9wdGlvbnMuZnJhbWUpO1xuXHR2YXIge3NpemUscGl4ZWx9ID0gb3B0aW9ucztcblxuXHR2YXIgYm1kID0gZ2FtZS5tYWtlLmJpdG1hcERhdGEoc291cmNlLndpZHRoKyhzaXplKjIpLCBzb3VyY2UuaGVpZ2h0KyhzaXplKjIpKTtcblx0dmFyIHNoYXBlID0gdXRpbHMuY29sb3JTaGFwZUJtZChrZXksb3B0aW9ucy5jb2xvcixvcHRpb25zLmZyYW1lKTtcblxuXHRmb3IodmFyIGk9MDtpPChzaXplKjIqKDEvcGl4ZWwpKSsxO2krKyl7XG5cdFx0Zm9yKHZhciBrPTA7azwoc2l6ZSoyKigxL3BpeGVsKSkrMTtrKyspe1xuXHRcdFx0Ym1kLmRyYXcoXG5cdFx0XHRcdHNoYXBlLFxuXHRcdFx0XHQoaSpwaXhlbCksXG5cdFx0XHRcdChrKnBpeGVsKVxuXHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdGlmKG9wdGlvbnMuaW5zaWRlKSBibWQuZHJhdyhzb3VyY2UsIHNpemUsIHNpemUsIHNvdXJjZS50ZXh0dXJlLmNyb3Aud2lkdGgsIHNvdXJjZS50ZXh0dXJlLmNyb3AuaGVpZ2h0KTtcblx0c291cmNlLnBlbmRpbmdEZXN0cm95ID0gdHJ1ZTtcblxuXHRyZXR1cm4gYm1kO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICRzdG9rZShzb3VyY2UsIGZyYW1lPXVuZGVmaW5lZCwgb3B0aW9ucyl7XG5cdGlmKHR5cGVvZiBmcmFtZT09PSdvYmplY3QnKSB7XG5cdFx0dmFyIHRtcFZhciA9IG9wdGlvbnM7XG5cdFx0b3B0aW9ucyA9IGZyYW1lID8gZnJhbWUgOiB7fTtcblx0XHRmcmFtZSA9IHRtcFZhcjtcblx0fVxuXG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRmcmFtZSxcblx0XHR4OjAsXG5cdFx0eTowLFxuXHRcdGdyb3VwOnVuZGVmaW5lZCxcblx0XHRjYWNoZTp0cnVlLFxuXHRcdHNpemU6MSxcblx0XHRwaXhlbDoxLFxuXHRcdGluc2lkZTp0cnVlLFxuXHRcdGNvbG9yOicjRkYwMDAwJ1xuXHR9O1xuXHRvcHRpb25zID0gdXRpbHMuZXh0ZW5kKHt9LGRlZmF1bHRzLG9wdGlvbnMpO1xuXG5cblx0dmFyIGtleSA9IFsnJHN0b2tlJyxzb3VyY2Usb3B0aW9ucy5mcmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ18nKTtcblxuXHRpZihvcHRpb25zLmNhY2hlICYmICFnYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkoa2V5KSl7XG5cdFx0dmFyIGJtZCA9IHN0cm9rZUJtZChzb3VyY2UsIG9wdGlvbnMpO1xuXHRcdGJtZC5nZW5lcmF0ZVRleHR1cmUoa2V5KTtcblx0XHRibWQucGVuZGluZ0Rlc3Ryb3kgPSB0cnVlO1xuXHRcdGtleSA9IGJtZDtcblx0fSBlbHNlIGlmKCFvcHRpb25zLmNhY2hlKXtcblx0XHRrZXkgPSBzdHJva2VCbWQob3B0aW9ucyk7XG5cdH1cblxuXHR2YXIgbmV3QXR0ciA9IE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyk7XG5cblx0W1xuXHRcdCdjYWNoZScsXG5cdFx0J2NvbG9yJyxcblx0XHQncGl4ZWwnLFxuXHRcdCdpbnNpZGUnLFxuXHRcdCdmcmFtZScsXG5cdFx0J3NpemUnLFxuXHRdLmZvckVhY2goZnVuY3Rpb24odmFsKXtcblx0XHRkZWxldGUobmV3QXR0clt2YWxdKTtcblx0fSlcblxuXHRyZXR1cm4gJHNwcml0ZShrZXksbmV3QXR0cik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWV0aG9kcy9zdHJva2UuanMiXSwic291cmNlUm9vdCI6IiJ9