import log from 'log';
import get from 'ajax-with-callback';

function main() {

	function ajaxCalls() {
		get('examples/hello.json', (result) => {
			log(result);
		});

		get('examples/world.json', (result) => {
			log(result);
		});

		log('... and done.');
	}

	ajaxCalls();

	log('Waiting...');
	setTimeout(() => log('doing other stuff...'), 10);
}

export default main;
