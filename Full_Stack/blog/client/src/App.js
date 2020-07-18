import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog';

const App = () => (
	<div className='App'>
		<Router>
			<Switch>
				<Route path='/' exact component={Blog} />
			</Switch>
		</Router>
	</div>
);

export default App;
