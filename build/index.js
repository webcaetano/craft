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

	'use strict';

	;(function () {
		var self = __webpack_require__(1);

		if (true) {
			module.exports = self;
		} else {
			this['$craft'] = self;
		}
	}).call(undefined);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var protoOptions = __webpack_require__(2);

	var protos = {
		$set: __webpack_require__(3)
	};

	module.exports = function $craft(game) {
		var self = {};

		self.$sprite = __webpack_require__(4)(game);

		return self;
	};

/***/ },
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (game) {
		return function $sprite(key, options) {
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
/******/ ]);