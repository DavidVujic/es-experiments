import log from 'log';
import get from 'ajax-with-promise';

function main() {

	function ajaxCalls() {
		get('hello.json')
		.then(log);

		get('world.json')
		.then(log);

		log('... and done.');
	}

	ajaxCalls();

	log('Waiting...');
	setTimeout(() => log('doing other stuff...'), 10);
}

export default main;
