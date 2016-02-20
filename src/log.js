const log = (message) => {
	const container = document.querySelector('#message-container');

	container.innerHTML += message;
	container.innerHTML += '<br/>';
};

export default log;
