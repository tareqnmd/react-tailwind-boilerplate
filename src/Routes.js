import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const Routes = () => {
	return (
		<Switch>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
