import React from 'react';

import { FireBaseInit } from './helpers/Firebase-helpers';

import { Header } from './components/Stuff';
import Main from './components/Main';

FireBaseInit(); // Initialize Firebase and firestore

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
		</div>
	);
};

export default App;
