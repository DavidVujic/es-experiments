let get = (url) => {

	return new Promise((resolve, reject) => {

		let request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function () {
			if (this.status >= 200 && this.status < 400) {
				resolve(this.response);
			} else {
				reject('We reached our target server, but it returned an error');
			}

		};

		request.onerror = function () {
			reject('There was a connection error of some sort');
		};

		request.send();
	});
};

export default get;
