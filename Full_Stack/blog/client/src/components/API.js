const getBlogs = async () => {
	const data = await fetch('http://localhost:1337/API/getBlogs');

	if (data.ok) {
		return await data.json();
	} else {
		console.error(`Error getting blogs: ${data.status} (${data.statusText})`);
		return null;
	}
};

const addBlogs = async values => {
	await fetch('http://localhost:1337/API/addBlogs', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	});
	console.log('Added requested Data');
};

export { getBlogs, addBlogs };
