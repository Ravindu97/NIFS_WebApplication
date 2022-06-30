import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useForm from 'react-hook-form';
function NewRequest() {
	// date set to be stored
	// const [formData, setFormData] = useState({
	// 	reqNo: '',
	// 	project: '',
	// 	fund: '',
	// 	forwardTo: '',
	// 	requestDate: '',
	// 	time: '',
	// 	estimateCost: '',
	// 	type: '',
	// 	modeTravel: '',
	// 	purpose: '',
	// 	note: '',
	// 	employee: '',
	// 	designation: '',
	// 	date: '',
	// 	division: '',
	// 	HOD: '',
	// 	route: '',
	// 	passengers: '',
	// });

	const { transportData, handleSubmit } = useForm();

	const submitDetails = (data) => {
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submitDetails)}>
				<div className="input-fields">
					<label>Request Number</label>
					<TextField
						required
						type="text"
						name="reqNo"
						id="outlined-basic"
						label="Required"
						variant="outlined"
						ref={transportData}
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
