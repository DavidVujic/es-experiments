define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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

	exports.default = run;
});