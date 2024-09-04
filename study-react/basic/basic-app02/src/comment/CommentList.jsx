import React from 'react';
import Comment from './Comment';

// 5.
const comments = [
	{
		index: 1,
		name: "Tony Stark",
		comment: "I'm IronMan",
	},
	{
		index: 2,
		name: "Tony Stark",
		comment: "I love you three thousand",
	},
	{
		index: 3,
		name: "Tony Stark",
		comment: "No hero is born. I will only be made",
	},
];

function CommentList(props) {
	return (
		<div>
			{/* // 4. */}
			{/* <Comment name={'Tony Stark'} comment={"I'm IronMan"} />
			<Comment name={'Tony Stark'} comment={"I love you three thousand"} /> */}
			{comments.map((comment, index) => {
				return (
					<Comment key={index} name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}

export default CommentList;