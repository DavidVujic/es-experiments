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

	function run(gen) {
		function act(gen, res) {
			var calls = gen.next(res);

			if (calls.done) {
				return;
			}

			calls.value.then(function (result) {
				act(gen, result);
			}).catch(function (error) {
				act(gen, error);
			});
		}

		act(gen());
	}

	function main() {

		run(regeneratorRuntime.mark(function ajaxCalls() {
			var result, result2;
			return regeneratorRuntime.wrap(function ajaxCalls$(_context) {
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

							(0, _log2.default)('| ... and done.');

						case 9:
						case 'end':
							return _context.stop();
					}
				}
			}, ajaxCalls, this);
		}));

		(0, _log2.default)('Waiting... |');
		setTimeout(function () {
			return (0, _log2.default)('doing other stuff...');
		}, 10);
	}

	exports.default = main;
});