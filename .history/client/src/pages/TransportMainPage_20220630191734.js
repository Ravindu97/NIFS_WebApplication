import React from 'react';
import TransportNavbar from '../components/Transport/shared/TransportNavbar';
import { Route, Routes } from 'react-router-dom';
import NewRequest from '../components/Transport/NewRequest';
function TransportMainPage() {
	return (
		<div>
			<h1>TransportMainPage</h1>
			<TransportNavbar />
			<Routes>
				<Route exact path="/" element={<NewRequest />} />
			</Routes>
		</div>
	);
}

export default TransportMainPage;
