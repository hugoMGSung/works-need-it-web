import React, { useState } from 'react';

function CheckButton(props) {
	const [isConfirmed, setIsConfirmed] = useState(false);

	const handleConfirm = () => {
		setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
	};

	return (
			<button 
				onClick={handleConfirm}
				disabled={isConfirmed}>
				{isConfirmed ? '응확인!' : '노확인'}
			</button>
	);
}

export default CheckButton;