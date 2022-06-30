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
			id: 2,
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
				<Route
					exact
					path="/"
					render={() => (
						<Box sx={{ width: '100%' }}>
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<Tabs>
									{pages &&
										pages.map((page) => (
											<Tab
												key={page.id}
												label={page.title}
												value={page.link}
												component={Link}
												to={page.link}
											/>
										))}
								</Tabs>
							</Box>
						</Box>
					)}
				/>
				<Route exact path="/recommend" element={<RecommendedRequest />} />
				<Route exact path="/approve" element={<ApproveRequest />} />
			</Routes>
		</div>
	);
}

export default TransportMainPage;
