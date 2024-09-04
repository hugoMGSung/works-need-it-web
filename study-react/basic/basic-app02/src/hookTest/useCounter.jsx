import React, { useState } from 'react';

function useCounter(initVal) {
	const [count, setCount] = useState(initVal);

	const increCount = () => setCount((count) => count + 1);
	const decreCount = () => setCount((count) => Math.max(count - 1, 0));

	return [count, increCount, decreCount];
}

export default useCounter;