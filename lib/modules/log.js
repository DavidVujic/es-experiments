define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var log = function log(message) {
		var container = document.querySelector('#message-container');

		container.innerHTML += message;
		container.innerHTML += '<br/>';
	};

	exports.default = log;
});