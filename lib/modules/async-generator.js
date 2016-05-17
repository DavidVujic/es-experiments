define(['exports', 'log', 'ajax-with-promise', 'async-runner'], function (exports, _log, _ajaxWithPromise, _asyncRunner) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _log2 = babelHelpers.interopRequireDefault(_log);

	var _ajaxWithPromise2 = babelHelpers.interopRequireDefault(_ajaxWithPromise);

	var _asyncRunner2 = babelHelpers.interopRequireDefault(_asyncRunner);

	function main() {

		(0, _asyncRunner2.default)(regeneratorRuntime.mark(function ajaxCalls() {
			var result, result2;
			return regeneratorRuntime.wrap(function ajaxCalls$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return (0, _ajaxWithPromise2.default)('examples/hello.json');

						case 2:
							result = _context.sent;

							(0, _log2.default)(result);

							_context.next = 6;
							return (0, _ajaxWithPromise2.default)('examples/world.json');

						case 6:
							result2 = _context.sent;

							(0, _log2.default)(result2);

							(0, _log2.default)('... and done.');

						case 9:
						case 'end':
							return _context.stop();
					}
				}
			}, ajaxCalls, this);
		}));

		(0, _log2.default)('Waiting...');
		setTimeout(function () {
			return (0, _log2.default)('doing other stuff...');
		}, 50);
	}

	exports.default = main;
});