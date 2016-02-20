import log from 'log';
import get from 'ajax';

const call = (urlGenerator) => {
	const next = (gen, res) => {
		const url = gen.next(res);

		if (url.done) {
			return;
		}

		get(url.value).then((result) => {
			next(gen, result);
		}).catch((error) => {
			next(gen, error);
		});
	}

	next(urlGenerator());
}

call(function* urls() {
	let result = yield 'hello.json';
	let result2 = yield 'world.json';

	log(result);
	log(result2);

	log('| ... and done.');
});

log('Waiting... |');
setTimeout(() => log('doing other stuff...'), 10);
