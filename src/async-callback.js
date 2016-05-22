import log from 'log';
import get from 'ajax-with-callback';

function main() {

	function ajaxCalls() {
		get('examples/hello.json', function (result) {
			log(result);
		}, function (error) {
			log(error);
		});

		get('examples/world.json', function (result) {
			log(result);
		}, function (error) {
			log(error);
		});

		log('... and done.');
	}

	ajaxCalls();

	log('Waiting...');
	setTimeout(() => log('doing other stuff...'), 10);
}

export default main;
