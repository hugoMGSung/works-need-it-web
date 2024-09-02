import React from 'react';

function Clock(props) {
	return (
		<div>
			<h1>Hello, React!</h1>
			<h2>Current DateTime: {new Date().toUTCString()}</h2>
		</div>
	);
}

export default Clock;