import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
// import datepicker

// sample data files start here
import Projects from './shared/sampleData/Project.json';
import Funds from './shared/sampleData/Fund.json';
import ForwardedTo from './shared/sampleData/ForwardedTo.json';
import Division from './shared/sampleData/Division.json';

// sample data files ends here

function NewRequest() {
	// date set to be stored
	const { register, handleSubmit, reset } = useForm();
	const [selectedDate, handleDateChange] = useState(new Date());
	const [project, setProjects] = useState(Projects);
	const [fund, setFunds] = useState(Funds);
	const [forwardedTo, setForwardedTos] = useState(ForwardedTo);

	const submitDetails = (data) => {
		console.log(data);
	};

	return (
		<div className="form-section">
			<form onSubmit={handleSubmit(submitDetails)}>
				<Box
					sx={{
						display: { xs: 'block', md: 'flex' },
						justifyContent: 'center',
					}}
				>
					{/* left section of the form */}
					<Box
						className="form-left"
						sx={{
							width: { xs: '90%', md: '50%' },
						}}
					>
						{/* Request number */}
						<Box className="input-fields">
							<label>Request Number</label>
							<TextField
								fullWidth
								required
								type="text"
								name="reqNo"
								id="outlined-basic"
								label="Required"
								variant="outlined"
								{...register('reqNo', { required: true })}
							/>
						</Box>

						{/* Select project */}
						<Box className="input-fields">
							<label>Project</label>
							<TextField
								fullWidth
								id="outlined-select-project-native"
								select
								label="Required"
								name="project"
								{...register('project', { required: true })}
								SelectProps={{
									native: true,
								}}
								helperText="Please select a Project"
							>
								{project.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/* Select Fund */}

						<Box className="input-fields">
							<label>Fund</label>
							<TextField
								fullWidth
								id="outlined-select-fund-native"
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
						</Box>

						{/* Select Forward */}

						<Box className="input-fields">
							<label>Forwarded To</label>
							<TextField
								fullWidth
								id="outlined-select-forward-native"
								select
								label="Required"
								name="forwardTo"
								{...register('forwardTo', { required: true })}
								SelectProps={{
									native: true,
								}}
							>
								{forwardedTo.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/* cost */}
						<Box className="input-fields">
							<label>Estimate Cost</label>
							<TextField
								fullWidth
								required
								type="text"
								name="estimateCost"
								id="outlined-basic"
								label="Required"
								variant="outlined"
								{...register('estimateCost', { required: true })}
							/>
						</Box>

						{/* travel type */}
						<Box className="input-fields">
							<label>Type</label>
							<TextField
								fullWidth
								id="outlined-select-forward-native"
								select
								label="Required"
								name="travelType"
								{...register('travelType', { required: true })}
								SelectProps={{
									native: true,
								}}
								helperText="Please select a Travel type"
							>
								<option value="private">Private</option>
								<option value="official">Official</option>
							</TextField>
						</Box>

						{/* Travel mode */}

						<Box className="input-fields">
							<label>Mode of Travel</label>
							<TextField
								fullWidth
								id="outlined-select-forward-native"
								select
								label="Required"
								name="travelMode"
								{...register('travelMode', { required: true })}
								SelectProps={{
									native: true,
								}}
								helperText="Please select a Travel mode"
							>
								<option value="car">Car</option>
								<option value="van">Van</option>
								<option value="cab">Cab</option>
							</TextField>
						</Box>

						{/* purpose */}
						<Box className="input-fields">
							<label>Purpose</label>
							<TextField
								fullWidth
								id="outlined-textarea"
								label="Required"
								name="purpose"
								{...register('purpose', { required: true })}
								SelectProps={{
									native: true,
								}}
								multiline
							/>
						</Box>
					</Box>
					{/* right section of the form */}
					<Box
						className="form-right"
						sx={{
							width: { xs: '90%', md: '50%' },
						}}
					>
						{/* designation */}
						<Box className="input-fields">
							<label>Location / Route</label>
							<TextField
								fullWidth
								required
								type="text"
								name="route"
								id="outlined-basic"
								label="Required"
								variant="outlined"
								{...register('route', { required: true })}
							/>
						</Box>
					</Box>
				</Box>
				{/* submit button */}
				<Button type="submit" variant="contained">
					Submit
				</Button>

				{/* reset the form */}
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
							travelType: '',
							travelMode: '',
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
