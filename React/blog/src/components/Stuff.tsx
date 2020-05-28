import React from 'react';

export function Header(): JSX.Element {
	return (
		<React.Fragment>
			<header className='bg-info text-white'>
				<div className='container'>
					<div id='branding' className='d-inline-block mt-0'>
						<h1>Test Blog</h1>
					</div>
					<nav className='d-inline-block float-right mt-3'>
						<ul className='list-inline list-unstyled'>
							<li className='list-inline-item white-link'>
								<a href='index.html' className='text-white'>
									Blog
								</a>
							</li>
							<li className='list-inline-item white-link'>lol</li>
							<li className='list-inline-item white-link'>lol</li>
						</ul>
					</nav>
				</div>
			</header>
		</React.Fragment>
	);
}
