const getAdvice = () => {
	fetch('https://api.adviceslip.com/advice')
		.then((response) => {
			console.log(response, 'resolved');
			return response.json();
		})
		.then((data) => {
			console.log(data);
			document.getElementById('advice-id').textContent = `Advice # ${data.slip.id}`;
			document.getElementById('advice-text').textContent = `"${data.slip.advice}"`;
		})
		.catch((error) => {
			console.log('rejected', error);
		});
};

getAdvice();
