define(['exports', 'log', 'ajax-with-promise'], function (exports, _log, _ajaxWithPromise) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _log2 = babelHelpers.interopRequireDefault(_log);

	var _ajaxWithPromise2 = babelHelpers.interopRequireDefault(_ajaxWithPromise);

	function main() {
		var ajaxCalls = function () {
			var ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var result, result2;
				return regeneratorRuntime.wrap(function _callee$(_context) {
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
				}, _callee, this);
			}));
			return function ajaxCalls() {
				return ref.apply(this, arguments);
			};
		}();

		ajaxCalls();

		(0, _log2.default)('Waiting...');
		setTimeout(function () {
			return (0, _log2.default)('doing other stuff...');
		}, 10);
	}

	exports.default = main;
});