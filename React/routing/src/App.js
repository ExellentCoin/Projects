import React from 'react';
import Nav from './components/Nav';
import Blogs from './components/Blog';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Nav />
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/blogs' component={Blogs} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
