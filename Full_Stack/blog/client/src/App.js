import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog';
import addBlog from './components/AddBlog';
import Nav from './components/Nav';

const App = () => (
	<div className='App'>
		<Router>
			<Nav />
			<Switch>
				<Route path='/' exact component={Blog} />
				<Route path='/addBlog' exact component={addBlog} />
			</Switch>
		</Router>
	</div>
);

export default App;
