define(['exports', 'log', 'ajax-with-callback'], function (exports, _log, _ajaxWithCallback) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _log2 = _interopRequireDefault(_log);

	var _ajaxWithCallback2 = _interopRequireDefault(_ajaxWithCallback);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function main() {

		function ajaxCalls() {
			(0, _ajaxWithCallback2.default)('examples/hello.json', function (result) {
				(0, _log2.default)(result);
			});

			(0, _ajaxWithCallback2.default)('examples/world.json', function (result) {
				(0, _log2.default)(result);
			});

			(0, _log2.default)('... and done.');
		}

		ajaxCalls();

		(0, _log2.default)('Waiting...');
		setTimeout(function () {
			return (0, _log2.default)('doing other stuff...');
		}, 10);
	}

	exports.default = main;
});