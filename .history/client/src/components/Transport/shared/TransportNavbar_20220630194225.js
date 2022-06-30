import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function TransportNavbar() {
	const pages = [
		{
			id: 0,
			title: 'New Request',
			link: '/',
		},
		{
			id: 2,
			title: 'Recommend Request',
			link: '/recommend',
		},
		{
			id: 2,
			title: 'Approve Request',
			link: '/approve',
		},
	];

	return (
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
	);
}
