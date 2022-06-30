import { Button } from '@mui/material';
import React from 'react';

function NewRequest() {
	const submitDetails = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={submitDetails}>
				<Button></Button>
			</form>
		</div>
	);
}

export default NewRequest;
