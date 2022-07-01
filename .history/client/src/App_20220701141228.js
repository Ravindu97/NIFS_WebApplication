import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import TransportMainPage from './pages/TransportMainPage';

function App() {
	const [formData, setFormData] = useState({});
	console.log(formData);
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/login"
						element={<Login setFormData={setFormData} />}
					/>
					<Route exact path="/transport/*" element={<TransportMainPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
