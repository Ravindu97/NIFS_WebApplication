import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import TransportMainPage from './pages/TransportMainPage';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/transport" element={<TransportMainPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
