import React, { useState } from 'react';
import { addBlogs } from './API';

const AddBlog = () => {
	const [values, setValues] = useState({
		author: '',
		title: '',
		content: '',
	});

	const handelInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = event => {
		console.log(values);
		addBlogs(values);
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input name='author' value={values.author || ''} onChange={handelInputChange} />
				<br />
			</label>

			<label>
				Title:
				<input name='title' value={values.title || ''} onChange={handelInputChange} />
				<br />
			</label>

			<label>
				Content:
				<textarea
					name='content'
					cols='30'
					rows='10'
					value={values.content || ''}
					onChange={handelInputChange}
				/>
				<br />
			</label>

			<input type='submit' value='Submit your blog!' />
		</form>
	);
};

export default AddBlog;
