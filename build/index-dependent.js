(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Phaser"), require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["Phaser", "_"], factory);
	else if(typeof exports === 'object')
		exports["$craft"] = factory(require("Phaser"), require("_"));
	else
		root["$craft"] = factory(root["Phaser"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	if (false) {
		var _ = require('./customLodash');
	} else {
		var _ = __webpack_require__(3);
	}

	// console.log(BOLA)

	var protos = {
		$set: __webpack_require__(4)
	};

	var bindProto = function bindProto(obj) {
		var type = arguments.length <= 1 || arguments[1] === undefined ? 'sprite' : arguments[1];

		_.each(protoOptions[type], function (val, funcName) {
			if (!val || !protos[funcName]) return;
			obj[funcName] = protos[funcName];
		});
	};

	module.exports = function $craft(game) {
		var self = {};

		self.$sprite = __webpack_require__(5)(game, bindProto, Phaser);

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
			$atlasImg: true,
			$atlasAnims: true,
			$fixPos: true,
			$copyPos: true
		},
		graphic: {
			$set: true,
			$tint: true,
			$into: true,
			$mid: true,
			$fixPos: true,
			$copyPos: true
		},
		group: {
			$set: true,
			$into: true,
			$fixPos: true,
			$add: true,
			$copyPos: true
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (game, bindProto) {
		self.$sprite = function $sprite(key, options) {
			var defaults = {
				x: 0,
				y: 0,
				frame: undefined,
				group: undefined
			};
			options = _.defaultsDeep({}, options, defaults);
			var tmpObj = game.add.sprite(options.x, options.y, key, options.frame, options.group);
			// prototypes
			bindProto(tmpObj, 'sprite');

			return tmpObj;
		};
	};

/***/ }
/******/ ])
});
;