import React from 'react';

const scaleNames = {
	C: 'Celsius',
	F: 'Fahrenheit',
};

function TempInput(props) {
	const handleChange = (event) => {
		props.onTempChange(event.target.value);
	};

	return (
		<fieldset>
			<legend>
				온도입력(단위:{scaleNames[props.scale]});
			</legend>
			<input value={props.temp} onChange={handleChange} />
		</fieldset>
	);
}

export default TempInput;