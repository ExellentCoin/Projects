import React, { useState, useEffect } from 'react';
import { getBlogs } from './API';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getBlogs();
			if (data) {
				setBlogs(data);
			}
		};
		getData();
	}, []);

	const blogsJSX = [];
	blogs.map(blog => {
		blogsJSX.push(
			<React.Fragment key={blog.id}>
				<h1>{blog.author}</h1>
				<h1>{blog.title}</h1>
				<h1>{blog.content}</h1>
			</React.Fragment>
		);
		return null;
	});

	return blogsJSX;
};

export default Blog;
