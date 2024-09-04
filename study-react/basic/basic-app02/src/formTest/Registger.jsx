import React, { useState } from 'react';

function Register(props) {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('Male');

	const handleChangeName = (event) => {
		setName(event.target.value);
	};

	const handleChangeGender = (event) => {
		setGender(event.target.value);
	};

	const handleSubmit = (event) => {
		alert(`name: ${name}, gender: ${gender}`);
		event.preventDefault(); // 창 새로고침 방지
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				이름 : 
				<input type='text' value={name} onChange={handleChangeName} />
			</label>
			<br />
			<label>
				성별 :
				<select value={gender} onChange={handleChangeGender}>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</label>
			<button type='submit'>등록</button>
		</form>
	);
}

export default Register;