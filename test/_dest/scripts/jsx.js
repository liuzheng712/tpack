var __tpack__ = __tpack__ || {
	modules: { __proto__: null },
	define: function (moduleName, factory) {
		return __tpack__.modules[moduleName] = {
			factory: factory,
			exports: {}
		};
	},
	require: function (moduleName, callback) {
		var module = __tpack__.modules[moduleName];
		if (!module) {
			throw new Error("Can not find module: " + moduleName);
		}
		if (!module.loaded) {
			module.loaded = true;
			module.factory.call(module.exports, module.exports, module, __tpack__.require, moduleName);
		}
		return module.exports;
	}
};

__tpack__.define("scripts/jsx.jsx", function(exports, module, require){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _aJs = require("a.js");

var _aJs2 = _interopRequireDefault(_aJs);
});

__tpack__.require("scripts/jsx.jsx");