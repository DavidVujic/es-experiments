define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function get(url, onSuccess, onError) {
		var request = new XMLHttpRequest();

		request.open('GET', url, true);

		request.onload = function () {
			if (this.status >= 200 && this.status < 400) {
				onSuccess(this.response);
			} else {
				onError('We reached our target server, but it returned an error');
			}
		};

		request.onerror = function () {
			onError('There was a connection error of some sort');
		};

		request.send();
	}

	exports.default = get;
});