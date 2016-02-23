function run(generator) {
	gen = generator();

	handleNext();
}

function handleNext(result) {
	const next = gen.next(result);

	if (next.done) {
		return next.value;
	}

	handlePromise(next);
}

function handlePromise(next) {
	next.value
		.then((result) => {
			handleNext(result);
		})
		.catch((error) => {
			gen.throw(error);
		});
}

let gen;

export default run;
