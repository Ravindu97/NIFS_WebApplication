import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function App() {
	return (
		<div>
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			<TextField id="filled-basic" label="Filled" variant="filled" />
			<TextField id="standard-basic" label="Standard" variant="standard" />
		</div>
	);
}

export default App;
