import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<Link to="/login">
				<Button variant="contained">Login</Button>
			</Link>
		</div>
	);
}

export default Navbar;