import React from 'react';

export function Header(): JSX.Element {
	return (
		<header>
			<div id='branding'>
				<h1>This is a test blog</h1>
			</div>
			<nav>
				<ul>
					<li>
						<a href='#'>Blog</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
