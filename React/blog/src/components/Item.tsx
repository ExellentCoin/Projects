import React from 'react';

function Item({ author, content }: { author: string; content: string }): JSX.Element {
	return (
		<div className=' container border my-3'>
			<h3>{content}</h3>
			<p>{author}</p>
		</div>
	);
}

export default Item;
