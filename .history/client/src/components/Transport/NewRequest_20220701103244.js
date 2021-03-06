import {
	Button,
	TextField,
	Select,
	InputLabel,
	MenuItem,
	FormControl,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
// import datepicker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
// sample data files start here
import Projects from './shared/sampleData/Project.json';
import Funds from './shared/sampleData/Fund.json';
import ForwardedTo from './shared/sampleData/ForwardedTo.json';
import Divisions from './shared/sampleData/Division.json';
import Designations from './shared/sampleData/Designation.json';

// sample data files ends here

function NewRequest() {
	// date set to be stored
	const { register, handleSubmit, reset } = useForm();

	const [project, setProjects] = useState(Projects);
	const [fund, setFunds] = useState(Funds);
	const [forwardedTo, setForwardedTos] = useState(ForwardedTo);
	const [division, setDivisions] = useState(Divisions);
	const [designation, setDesignations] = useState(Designations);
	const [reqDate, setReqDate] = React.useState(null);
	const [reqTime, setReqTime] = React.useState(null);
	const [today, setToday] = React.useState(new Date());

	const initialSelector = Object.freeze({
		fundType: '',
		forwardPerson: '',
		divisionName: '',
		designationName: '',
		project: '',
	});
	const [updateSelect, usetUpdateSelect] = useState(initialSelector);

	const handleSelector = (e) => {
		usetUpdateSelect({
			...updateSelect,
			[e.target.name]: e.target.value.trim(),
		});
	};

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
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Required</InputLabel>
								<Select
									fullWidth
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="Required"
									required
									name="project"
									onChange={handleSelector}
									value={initialSelector.project}
									{...register('project', { required: true })}
								>
									<MenuItem value="">
										<em>Select a project</em>
									</MenuItem>
									{project.map((option) => (
										<MenuItem key={option.id} value={option.value}>
											{option.value}
										</MenuItem>
									))}
								</Select>
							</FormControl>
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
								<option value="">
									<em>'Select a project'</em>
								</option>
								{fund.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/* Select Forward */}

						{/* <Box className="input-fields">
							<label>Forward To</label>

							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Required</InputLabel>
								<Select
									fullWidth
									required
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="Required"
									{...register('forwardTo', { required: true })}
								>
									<MenuItem value="">
										<em>Select a project</em>
									</MenuItem>
									{forwardedTo.map((option) => (
										<MenuItem key={option.id} value={option.value}>
											{option.value}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box> */}

						{/* date picker */}

						<Box className="input-fields">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<label>Request Date</label>
								<DatePicker
									label="Select a Date"
									value={reqDate}
									{...register('requestDate', { required: true })}
									onChange={(newValue) => {
										setReqDate(newValue);
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Box>

						{/* Time picker */}

						<Box className="input-fields">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<label>Request Time</label>
								<TimePicker
									label="Select a Time"
									value={reqTime}
									{...register('requestTime', { required: true })}
									onChange={(newValue) => {
										setReqTime(newValue);
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
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
						{/* today date picker */}

						<Box className="input-fields">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<label>Request Date</label>
								<DatePicker
									label="Select a Date"
									value={today}
									{...register('requestDate', { required: true })}
									onChange={(newValue) => {
										setToday(newValue);
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Box>

						{/* designations */}

						<Box className="input-fields">
							<label>Designation</label>
							<TextField
								fullWidth
								id="outlined-select-forward-native"
								select
								label="Required"
								name="designation"
								{...register('designation', { required: true })}
								SelectProps={{
									native: true,
								}}
								helperText="Please select your Designation"
							>
								{designation.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/* division */}

						<Box className="input-fields">
							<label>Division</label>
							<TextField
								fullWidth
								id="outlined-select-forward-native"
								select
								label="Required"
								name="division"
								{...register('division', { required: true })}
								SelectProps={{
									native: true,
								}}
								helperText="Please select your Division"
							>
								{division.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/* HOD */}

						{/* Location / route */}

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

						{/* Location / route */}

						<Box className="input-fields">
							<label>Passengers</label>
							<TextField
								fullWidth
								required
								type="text"
								name="passengers"
								id="outlined-basic"
								label="Required"
								variant="outlined"
								{...register('passengers', { required: true })}
							/>
						</Box>
					</Box>
				</Box>

				{/* Note */}

				<Box sx={{ justifyContent: 'center' }}>
					<Box className="input-fields">
						<label>Note</label>
						<TextField
							fullWidth
							id="outlined-textarea"
							label="Required"
							name="note"
							{...register('note', { required: true })}
							SelectProps={{
								native: true,
							}}
							multiline
						/>
					</Box>
				</Box>

				{/* submit button */}

				<Box>
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
								requestTime: '',
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
				</Box>
			</form>
		</div>
	);
}

export default NewRequest;
