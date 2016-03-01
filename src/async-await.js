import log from 'log';
import get from 'ajax-with-promise';

function main() {

	async function ajaxCalls() {
		let result = await get('examples/hello.json');
		log(result);

		let result2 = await get('examples/world.json');
		log(result2);

		log('... and done.');
	}

	ajaxCalls();

	log('Waiting...');
	setTimeout(() => log('doing other stuff...'), 10);
}

export default main;
