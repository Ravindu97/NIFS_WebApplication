import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
function NewRequest() {
	// date set to be stored
	const [formData, setFormData] = useState({
		reqNo: '',
		project: '',
		fund: '',
		forwardTo: '',
		requestDate: '',
		time: '',
		estimateCost: '',
		type: '',
		modeTravel: '',
		purpose: '',
		note: '',
		employee: '',
		designation: '',
		date: '',
		division: '',
		HOD: '',
		route: '',
		passengers: '',
	});

	const {
		reqNo,
		project,
		fund,
		forwardTo,
		requestDate,
		time,
		estimateCost,
		type,
		modeTravel,
		purpose,
		note,
		employee,
		designation,
		date,
		division,
		HOD,
		route,
		passengers,
	} = formData;

	const submitDetails = (e) => {
		e.preventDefault();
		console.log('check form');
	};

	return (
		<div>
			<form onSubmit={submitDetails}>
				<div className="input-fields">
					<label>Request Number</label>
					<TextField
						id="outlined-basic"
						label="Request Number"
						variant="outlined"
					/>
				</div>
				<Button type="submit">Send</Button>
			</form>
		</div>
	);
}

export default NewRequest;