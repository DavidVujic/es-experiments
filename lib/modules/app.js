define(['log', 'ajax'], function (_log, _ajax) {
	'use strict';

	var _log2 = _interopRequireDefault(_log);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var call = function call(urlGenerator) {
		var next = function next(gen, res) {
			var url = gen.next(res);

			if (url.done) {
				return;
			}

			(0, _ajax2.default)(url.value).then(function (result) {
				next(gen, result);
			}).catch(function (error) {
				next(gen, error);
			});
		};

		next(urlGenerator());
	};

	call(regeneratorRuntime.mark(function urls() {
		var result, result2;
		return regeneratorRuntime.wrap(function urls$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 'hello.json';

					case 2:
						result = _context.sent;
						_context.next = 5;
						return 'world.json';

					case 5:
						result2 = _context.sent;


						(0, _log2.default)(result);
						(0, _log2.default)(result2);

						(0, _log2.default)('| ... and done.');

					case 9:
					case 'end':
						return _context.stop();
				}
			}
		}, urls, this);
	}));

	(0, _log2.default)('Waiting... |');
	setTimeout(function () {
		return (0, _log2.default)('doing other stuff...');
	}, 10);
});