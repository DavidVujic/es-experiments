function run(gen) {
	let it = gen();

	return Promise.resolve().then(handleNext);

	function handleNext(value) {
		var next = it.next(value);

		return handleResult(next);
	}

	function handleResult(next) {
		if (next.done) {
			return next.value;
		}

		return Promise.resolve(next.value)
			.then(handleNext)
			.catch(handleError);
	}

	function handleError(err) {
		return Promise.resolve(it.throw(err)).then(handleResult);
	}
}

export default run;
