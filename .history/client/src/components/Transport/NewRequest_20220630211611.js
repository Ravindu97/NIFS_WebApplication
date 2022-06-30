import React from 'react';

function NewRequest() {
	const submitDetails = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={submitDetails}></form>
		</div>
	);
}

export default NewRequest;
