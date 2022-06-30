import { Button, TextField } from '@mui/material';
import React from 'react';

function NewRequest() {
	const submitDetails = (e) => {
		e.preventDefault();
		console.log('check form');
	};

	return (
		<div>
			<form onSubmit={submitDetails}>
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<Button type="submit">Send</Button>
			</form>
		</div>
	);
}

export default NewRequest;
