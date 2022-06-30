import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

	const { register, handleSubmit, reset } = useForm();

	const submitDetails = (data) => {
		console.log(data);
	};

	return (
		<div className="form-area">
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
						{...register('reqNo', { required: true })}
					/>
				</div>
				<div className="input-fields">
					<label>Project</label>
					<TextField
						required
						type="text"
						name="project"
						id="outlined-basic"
						label="Required"
						variant="outlined"
						{...register('project', { required: true })}
					/>
				</div>
				<Button type="submit" variant="contained">
					Submit
				</Button>
				<input
					type="button"
					onClick={() => {
						reset({
							reqNo: '',
							project: '',
						});
					}}
				/>
			</form>
		</div>
	);
}

export default NewRequest;
