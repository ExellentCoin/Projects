import React from 'react';

import Item from './components/Item';
import { Header } from './components/Stuff';

interface Item {
	id: number;
	author: string;
	content: string;
}

const items: Item[] = [
	{
		id: 0,
		author: 'Jonas',
		content: 'This is again a test',
	},
	{
		id: 1,
		author: 'David',
		content: 'this is test number 2',
	},
];

function App(): JSX.Element {
	let ItemArray: any = [];
	items.map(item => {
		ItemArray.push(<Item key={item.id} author={item.author} content={item.content} />);
	});
	return (
		<div className='App'>
			<Header />
			{ItemArray}
		</div>
	);
}

export default App;
