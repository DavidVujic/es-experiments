function run(generator) {

	let gen = generator();

	handleNext();

	function handleNext(result) {
		let next = gen.next(result);

		if (next.done) {
			return next.value;
		}

		handlePromise(next);
	}

	function handlePromise(next) {
		next.value
			.then(function (result) {
				handleNext(result);
			})
			.catch(function (error) {
				gen.throw(error);
			});
	}
}

export default run;
