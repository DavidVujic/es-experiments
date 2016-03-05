define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function run(generator) {
		gen = generator();

		handleNext();
	}

	function handleNext(result) {
		var next = gen.next(result);

		if (next.done) {
			return next.value;
		}

		handlePromise(next);
	}

	function handlePromise(next) {
		next.value.then(function (result) {
			handleNext(result);
		}).catch(function (error) {
			gen.throw(error);
		});
	}

	var gen = void 0;

	exports.default = run;
});