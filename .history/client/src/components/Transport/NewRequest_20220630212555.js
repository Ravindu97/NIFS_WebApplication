import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
function NewRequest() {
	const [reqNo, setReqNo] = useState();
	const [project, setProject] = useState();
	const [fund, setFund] = useState();
	const [forwardTo, setForwardTo] = useState();
	const [requestDate, setRequestDate] = useState();
	const [time, setTime] = useState();
	const [estimateCost, setEstimateCost] = useState();
	const [type, setType] = useState();
	const [modeTravel, setModeTravel] = useState();
	const [purpose, setPurpose] = useState();
	const [note, setNote] = useState();
	const [date, setDate] = useState();
	const [divesion, setDivesion] = useState();
	const [HOD, setHOD] = useState();
	const [route, setRoute] = useState();
	const [passengers, setPassengers] = useState();

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
