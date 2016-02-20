define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var log = function log(message) {
		document.querySelector('#message-container').innerHTML += message;
	};

	exports.default = log;
});