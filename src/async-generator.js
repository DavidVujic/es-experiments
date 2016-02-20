import log from 'log';
import get from 'ajax-with-promise';

function run(gen) {
	function act(gen, res) {
		let calls = gen.next(res);

		if (calls.done) {
			return;
		}

		calls.value
			.then((result) => {
				act(gen, result);
			})
			.catch((error) => {
				act(gen, error);
			});
	}

	act(gen());
}

function main() {

	run(function* ajaxCalls() {
		let result = yield get('hello.json');
		log(result);

		let result2 = yield get('world.json');
		log(result2);

		log('| ... and done.');
	});

	log('Waiting... |');
	setTimeout(() => log('doing other stuff...'), 10);

}

export default main;
