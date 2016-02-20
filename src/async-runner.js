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

export default run;
