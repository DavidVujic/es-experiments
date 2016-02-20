define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var get = function get(url, callback) {

		var result = {};
		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function () {
			if (this.status >= 200 && this.status < 400) {
				result.data = this.response;
			} else {
				result.error = 'We reached our target server, but it returned an error';
			}

			callback(result);
		};

		request.onerror = function () {
			result.error = 'There was a connection error of some sort';
			callback(result);
		};

		request.send();
	};

	exports.default = get;
});