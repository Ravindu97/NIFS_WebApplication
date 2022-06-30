import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import TransportNavbar from '../components/Transport/shared/TransportNavbar';
import { Route, Routes } from 'react-router-dom';
import NewRequest from '../components/Transport/NewRequest';
import RecommendedRequest from '../components/Transport/RecommendedRequest';
import ApproveRequest from '../components/Transport/ApproveRequest';

function TransportMainPage() {
	const pages = [
		{
			id: 0,
			title: 'New Request',
			link: '/transport',
		},
		{
			id: 1,
			title: 'Recommend Request',
			link: '/transport/recommend',
		},
		{
			id: 2,
			title: 'Approve Request',
			link: '/transport/approve',
		},
	];
	return (
		<div>
			<h1>TransportMainPage</h1>
			{/* <TransportNavbar /> */}
			<Routes>
				<Route exact path="/" element={<NewRequest />} />
				<Route exact path="/recommend" element={<RecommendedRequest />} />
				<Route exact path="/approve" element={<ApproveRequest />} />
			</Routes>
		</div>
	);
}

export default TransportMainPage;
