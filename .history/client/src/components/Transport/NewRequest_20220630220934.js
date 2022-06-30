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

	const onChange = (e) => {
		// setFormData((prevState) => ({
		// 	...prevState,
		// 	[e.target.value]: e.target.value,
		// }));
	};

	const submitDetails = (e) => {
		e.preventDefault();
		const userData = {
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
		};

		console.log(userData);
	};

	return (
		<div>
			<form onSubmit={submitDetails}>
				<div className="input-fields">
					<label>Request Number</label>
					<TextField
						required
						type="text"
						name="reqNo"
						id="outlined-basic"
						label="Required"
						value={reqNo}
						variant="outlined"
						onChange={onChange}
					/>
				</div>
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default NewRequest;
