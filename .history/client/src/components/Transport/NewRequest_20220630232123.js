import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Projects from './shared/sampleData/Project.json';
import Funds from './shared/sampleData/Fund.json';
import ForwardedTo from './shared/sampleData/ForwardedTo.json';

function NewRequest() {
	// date set to be stored
	const { register, handleSubmit, reset } = useForm();

	const [project, setProjects] = useState(Projects);
	const [fund, setFunds] = useState(Funds);
	const [forwardedTo, setForwardedTos] = useState(ForwardedTo);

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
						id="outlined-select-currency-native"
						select
						label="Required"
						name="project"
						{...register('project', { required: true })}
						SelectProps={{
							native: true,
						}}
						helperText="Please person to forward"
					>
						{project.map((option) => (
							<option key={option.id} value={option.value}>
								{option.value}
							</option>
						))}
					</TextField>
				</div>
				<div className="input-fields">
					<label>Fund</label>
					<TextField
						id="outlined-select-currency-native"
						select
						label="Required"
						name="fund"
						{...register('fund', { required: true })}
						SelectProps={{
							native: true,
						}}
					>
						{fund.map((option) => (
							<option key={option.id} value={option.value}>
								{option.value}
							</option>
						))}
					</TextField>
				</div>
				<div className="input-fields">
					<label>Forwarded To</label>
					<TextField
						id="outlined-select-currency-native"
						select
						label="Required"
						name="forwardedTo"
						{...register('forwardedTo', { required: true })}
						SelectProps={{
							native: true,
						}}
						helperText="Please person to forward"
					>
						{forwardedTo.map((option) => (
							<option key={option.id} value={option.value}>
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
