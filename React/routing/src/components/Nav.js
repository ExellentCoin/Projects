import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<Link to='/home'>
					<li>Home</li>
				</Link>
				<Link to='/blogs'>
					<li>Blogs</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
