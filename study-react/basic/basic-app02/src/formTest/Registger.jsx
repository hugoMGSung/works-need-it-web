import React, { useState } from 'react';

function Register(props) {
	const [name, setName] = useState('');

	const handleChangeName = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = (event) => {
		alert(`name: ${name}`);
		event.preventDefault(); // 창 새로고침 방지
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				이름 : 
				<input type='text' value={name} onChange={handleChangeName} />
			</label>
			<button type='submit'>등록</button>
		</form>
	);
}

export default Register;