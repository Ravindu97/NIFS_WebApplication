import React from 'react';
import TransportNavbar from '../components/Transport/shared/TransportNavbar';
import { Route, Routes } from 'react-router-dom';
import NewRequest from '../components/Transport/NewRequest';
import RecommendedRequest from '../components/Transport/RecommendedRequest';
function TransportMainPage() {
	return (
		<div>
			<h1>TransportMainPage</h1>
			<TransportNavbar />
			<Routes>
				<Route exact path="/" element={<NewRequest />} />
				<Route exact path="/recomment" element={<RecommendedRequest />} />
			</Routes>
		</div>
	);
}

export default TransportMainPage;
