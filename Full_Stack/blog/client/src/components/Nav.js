import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<ul>
		<Link to='/'>
			<li>Blog</li>
		</Link>
		<Link to='/addBlog'>
			<li>AddBlog</li>
		</Link>
	</ul>
);

export default Nav;
