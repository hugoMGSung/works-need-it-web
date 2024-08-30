import React from "react";

function Book(props) {
	return (
		<div>
			<h1>{`책 명 : ${props.name}`}</h1>
			<h2>{`페이지 수 : ${props.numOfPage}`}</h2>
		</div>
	)
}

export default Book;