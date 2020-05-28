import React from 'react';

function Item({ author, content }: { author: string; content: string }): JSX.Element {
	return (
		<React.Fragment>
			<h3>{content}</h3>
			<p>{author}</p>
		</React.Fragment>
	);
}

export default Item;
