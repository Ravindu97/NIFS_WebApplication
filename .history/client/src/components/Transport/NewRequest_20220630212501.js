import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
function NewRequest() {
	const [reqNo, setReqNo] = useState();
	const [Project, setProject] = useState();
	const [Fund, setFund] = useState();
	const [ForwardTo, setForwardTo] = useState();
	const [RequestDate, setRequestDate] = useState();
	const [Time, setTime] = useState();
	const [EstimateCost, setEstimateCost] = useState();
	const [Type, setType] = useState();
	const [ModeTravel, setModeTravel] = useState();
	const [Purpose, setPurpose] = useState();
	const [Note, setNote] = useState();
	const [Date, setDate] = useState();
	const [Divesion, setDivesion] = useState();
	const [HOD, setHOD] = useState();
	const [Note, setNote] = useState();
	const [Note, setNote] = useState();

	const submitDetails = (e) => {
		e.preventDefault();
		console.log('check form');
	};

	return (
		<div>
			<form onSubmit={submitDetails}>
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<Button type="submit">Send</Button>
			</form>
		</div>
	);
}

export default NewRequest;
