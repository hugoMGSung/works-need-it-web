import React, { useEffect, useState } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 20;

function Dormitory(props) {
	const [isFull, setIsFull] = useState(false);
	const [count, increCount, decreCount] = useCounter(0);

	useEffect(() => {
		console.log("---------------------->>");
		console.log('useEffect() is called');
		console.log(`isFull -> ${isFull}`); // string format
	});

	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
		console.log(`Current count : ${count}`)
	}, [count]);

	return (
		<div style={{ padding: 15 }}>
			<p>{`총 ${count}명이 숙소사용중입니다`}</p>

			<button onClick={increCount} disabled={isFull}>체크인</button>
			<button onClick={decreCount}>체크아웃</button>

			{isFull && <p style={{ color: "red" }}>정원초과</p>}
		</div>
	);
}

export default Dormitory;