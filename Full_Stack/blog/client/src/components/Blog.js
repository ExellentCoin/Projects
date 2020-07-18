import React, { Component } from 'react';
import { getBlogs } from './API';

class Blog extends Component {
	constructor() {
		super();
		this.state = {
			blogs: [],
		};
	}

	render() {
		const blogs = [];
		this.state.blogs.map(blog => {
			blogs.push(
				<React.Fragment key={blog.id}>
					<h1>{blog.author}</h1>
					<h1>{blog.title}</h1>
					<h1>{blog.content}</h1>
				</React.Fragment>
			);
			return null;
		});
		return blogs;
	}

	async componentDidMount() {
		const data = await getBlogs();
		if (data) {
			this.setState({ blogs: data });
		}
	}
}

export default Blog;
