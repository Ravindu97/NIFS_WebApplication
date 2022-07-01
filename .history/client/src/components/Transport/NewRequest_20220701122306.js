import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
// import datepicker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
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

	const getToday = new Date();
	const time = getToday.getHours() + ':' + getToday.getMinutes();

	const [project, setProjects] = useState(Projects);
	const [fund, setFunds] = useState(Funds);
	const [forwardedTo, setForwardedTos] = useState(ForwardedTo);
	const [division, setDivisions] = useState(Divisions);
	const [designation, setDesignations] = useState(Designations);
	const [reqDate, setReqDate] = React.useState(getToday);
	const [reqTime, setReqTime] = React.useState(time);
	const [today, setToday] = React.useState(getToday);

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
								{...register('reqNo')}
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
								{...register('project')}
								SelectProps={{
									native: true,
								}}
								helperText="Please select a Project"
							>
								<option value="" selected disabled></option>
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
								{...register('fund')}
								SelectProps={{
									native: true,
								}}
							>
								<option value="" selected disabled></option>
								{fund.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/* Select Forward */}

						<Box className="input-fields">
							<label>Forward To</label>
							<TextField
								fullWidth
								id="outlined-select-forward-native"
								select
								label="Required"
								name="forwardTo"
								{...register('forwardTo')}
								SelectProps={{
									native: true,
								}}
							>
								<option value="" selected disabled></option>
								{forwardedTo.map((option) => (
									<option key={option.id} value={option.value}>
										{option.value}
									</option>
								))}
							</TextField>
						</Box>

						{/*request date*/}

						<Box className="input-fields">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<label>Request Date</label>
								<DatePicker
									fullWidth
									label="Required"
									value={reqDate}
									onChange={(newValue) => {
										setReqDate(newValue);
									}}
									{...register('requestDate')}
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
									{...register('requestTime')}
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
								{...register('estimateCost')}
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
								{...register('travelType')}
								SelectProps={{
									native: true,
								}}
								helperText="Please select a Travel type"
							>
								<option value="" selected disabled></option>
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
								{...register('travelMode')}
								SelectProps={{
									native: true,
								}}
								helperText="Please select a Travel mode"
							>
								<option value="" selected disabled></option>
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
								{...register('purpose')}
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
						{/*request today date*/}

						<Box className="input-fields">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<label>Date</label>
								<DatePicker
									fullWidth
									label="Required"
									value={today}
									onChange={(newValue) => {
										setToday(newValue);
									}}
									{...register('requestDate')}
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
								{...register('designation')}
								SelectProps={{
									native: true,
								}}
								helperText="Please select your Designation"
							>
								<option value="" selected disabled></option>
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
								{...register('division')}
								SelectProps={{
									native: true,
								}}
								helperText="Please select your Division"
							>
								<option value="" selected disabled></option>
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
								{...register('route')}
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
								{...register('passengers')}
							/>
						</Box>
					</Box>
				</Box>

				{/* Note */}

				<Box className="input-fields">
					<label>Note</label>
					<TextField
						fullWidth
						id="outlined-textarea"
						label="Required"
						name="note"
						{...register('note')}
						SelectProps={{
							native: true,
						}}
						multiline
					/>
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
				</Box>
			</form>
		</div>
	);
}

export default NewRequest;
