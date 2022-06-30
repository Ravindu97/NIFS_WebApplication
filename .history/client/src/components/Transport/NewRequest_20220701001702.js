import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// import datepicker
import DateFnsUtils from '@date-io/date-fns';
import {
	DatePicker,
	TimePicker,
	DateTimePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
// sample data files start here
import Projects from './shared/sampleData/Project.json';
import Funds from './shared/sampleData/Fund.json';
import ForwardedTo from './shared/sampleData/ForwardedTo.json';
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
		<div className="form-area">
			<form onSubmit={handleSubmit(submitDetails)}>
				{/* Request number */}
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

				{/* Select project */}
				<div className="input-fields">
					<label>Project</label>
					<TextField
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
				</div>

				{/* Select Fund */}

				<div className="input-fields">
					<label>Fund</label>
					<TextField
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
				</div>

				{/* Select Forward */}

				<div className="input-fields">
					<label>Forwarded To</label>
					<TextField
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
				</div>

				{/* cost */}
				<div className="input-fields">
					<label>Estimate Cost</label>
					<TextField
						required
						type="text"
						name="estimateCost"
						id="outlined-basic"
						label="Required"
						variant="outlined"
						{...register('estimateCost', { required: true })}
					/>
				</div>

				{/* travel type */}
				<div className="input-fields">
					<label>Type</label>
					<TextField
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
				</div>

				{/* Travel mode */}

				<div className="input-fields">
					<label>Mode of Travel</label>
					<TextField
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
				</div>

				{/* purpose */}
				<div className="input-fields">
					<label>Purpose</label>
					<TextField
						id="outlined-textarea"
						label="Required"
						name="purpose"
						{...register('purpose', { required: true })}
						SelectProps={{
							native: true,
						}}
						multiline
					/>
				</div>
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
