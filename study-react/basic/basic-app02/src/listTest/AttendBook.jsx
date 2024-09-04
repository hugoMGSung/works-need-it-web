import React from 'react';

const students = [
	{
		name: "Tony",
	},
	{
		name: 'Steve',
	},
	{
		name: 'Bruce',
	},
	{
		name: 'Natasha',
	},
];

function AttendBook(props) {
	return (
		<ul>
			{students.map((student, index) => {
				return <li key={index}>{student.name}</li>
			})}
		</ul>
	);
}

export default AttendBook;