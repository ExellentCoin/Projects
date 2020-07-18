const getBlogs = async () => {
	const data = await fetch('http://localhost:1337/API/getBlogs');

	if (data.ok) {
		return await data.json();
	} else {
		console.error(`Error getting blogs: ${data.status} (${data.statusText})`);
		return null;
	}
};

export { getBlogs };
