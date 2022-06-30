import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
function NewRequest() {
	// date set to be stored
	const { register, handleSubmit, reset } = useForm();

	const forwardedToList = [
		{
			value: 'Kamal',
		},
		{
			value: 'Nimal',
		},
		{
			value: 'Sumith',
		},
		{
			value: 'Sarath',
		},
	];

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
				<div className="input-fields">
					<label>Fund</label>
					<TextField
						required
						type="text"
						name="fund"
						id="outlined-basic"
						label="Required"
						variant="outlined"
						{...register('fund', { required: true })}
					/>
				</div>
				<div className="input-fields">
					<label>Forwarded To</label>
					<TextField
						id="outlined-select-currency-native"
						select
						label="Native select"
						name="forwardedTo"
						{...register('forwardedTo', { required: true })}
						SelectProps={{
							native: true,
						}}
						helperText="Please select your currency"
					>
						{forwardedToList.map((option) => (
							<option key={option.value} value={option.value}>
								{option.value}
							</option>
						))}
					</TextField>
				</div>
				<Button type="submit" variant="contained">
					Submit
				</Button>
				<Button
					type="button"
					onClick={() => {
						reset({
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
					}}
				>
					Reset
				</Button>
			</form>
		</div>
	);
}

export default NewRequest;
