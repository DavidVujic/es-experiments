import { default as ajaxWithCallback } from 'ajax-with-callback';

function get(url) {

	return new Promise((resolve, reject) => {
		ajaxWithCallback(url, resolve, reject);
	});

}

export default get;
