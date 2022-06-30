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

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const resetFields = (e) => {
		console.log('reset trigger');
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: '',
		}));
	};

	const submitDetails = (e) => {
		e.preventDefault();
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
						variant="outlined"
						onChange={onChange}
					/>
				</div>
				<Button type="submit" variant="contained">
					Submit
				</Button>
				<Button onClick={resetFields} variant="contained">
					Reset
				</Button>
			</form>
		</div>
	);
}

export default NewRequest;
