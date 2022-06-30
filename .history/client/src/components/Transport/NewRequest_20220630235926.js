import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// import datepicker
import 'date-fns';
import DatefnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// sample data files start here
import Projects from './shared/sampleData/Project.json';
import Funds from './shared/sampleData/Fund.json';
import ForwardedTo from './shared/sampleData/ForwardedTo.json';
// sample data files ends here

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
						helperText="Please select Project"
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
						helperText="Please person to Forward"
					>
						{forwardedTo.map((option) => (
							<option key={option.id} value={option.value}>
								{option.value}
							</option>
						))}
					</TextField>
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
