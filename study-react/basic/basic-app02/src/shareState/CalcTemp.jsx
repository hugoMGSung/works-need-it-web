import React, { useState } from 'react';
import TempInput from './TempInput';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>물이 끓음</p>;
	} else {
		return <p>안끓음</p>
	}
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5 / 9);
}

function toFahrenheit(celsius) {
	return ((celsius * 9) / 5) + 32;
}

function tryConvert(temp, conv) {
	const input = parseFloat(temp);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = conv(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function CalcTemp(props) {
	const [temp, setTemp] = useState('');
	const [scale, setScale] = useState('');

	const handleCelsiusChange = (temp) => {
		setTemp(temp);
		setScale('C');
	}

	const handleFahrenheitChange = (temp) => {
		setTemp(temp);
		setScale('F');
	}

	const celsius =
		scale === 'F' ? tryConvert(temp, toCelsius) : temp;
	const fahrenheit = 
		scale === 'C' ? tryConvert(temp, toFahrenheit) : temp;

	return (
		<div>
			<TempInput
				scale='C'
				temp={celsius}
				onTempChange={handleCelsiusChange} />
			<TempInput
				scale='F'
				temp={fahrenheit}
				onTempChange={handleFahrenheitChange} />
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
}

export default CalcTemp;