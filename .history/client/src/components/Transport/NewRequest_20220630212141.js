import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
function NewRequest() {
	const [reqNo, setReqNo] = useState();

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
