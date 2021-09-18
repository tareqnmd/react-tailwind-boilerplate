import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes />
			<Footer />
		</Router>
	);
}

export default App;
