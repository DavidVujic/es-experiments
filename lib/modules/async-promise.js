define(['exports', 'log', 'ajax-with-promise'], function (exports, _log, _ajaxWithPromise) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _log2 = _interopRequireDefault(_log);

	var _ajaxWithPromise2 = _interopRequireDefault(_ajaxWithPromise);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function main() {

		function ajaxCalls() {
			(0, _ajaxWithPromise2.default)('examples/hello.json').then(_log2.default);

			(0, _ajaxWithPromise2.default)('examples/world.json').then(_log2.default);

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