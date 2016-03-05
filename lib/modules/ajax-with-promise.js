define(['exports', 'ajax-with-callback'], function (exports, _ajaxWithCallback) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ajaxWithCallback2 = babelHelpers.interopRequireDefault(_ajaxWithCallback);

	function get(url) {
		return new Promise(function (resolve, reject) {
			(0, _ajaxWithCallback2.default)(url, resolve, reject);
		});
	}

	exports.default = get;
});