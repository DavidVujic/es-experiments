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

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							return step("next", value);
						}, function (err) {
							return step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	function main() {
		var ajaxCalls = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var result, result2;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _ajaxWithPromise2.default)('hello.json');

							case 2:
								result = _context.sent;

								(0, _log2.default)(result);

								_context.next = 6;
								return (0, _ajaxWithPromise2.default)('world.json');

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