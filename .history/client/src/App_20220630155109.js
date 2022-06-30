import * as React from 'react';
import { BrowserRoute as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
			</Router>
		</div>
	);
}

export default App;
