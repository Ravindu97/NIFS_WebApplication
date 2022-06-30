import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<Link to="/">
				<Button variant="contained">Home</Button>
			</Link>
			<Link to="/login">
				<Button variant="contained">Login</Button>
			</Link>
			<Button variant="contained">
				<Link to="/login">Login</Link>
			</Button>
		</div>
	);
}

export default Navbar;