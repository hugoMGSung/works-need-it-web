import React from "react";

function Book(props) {
	return (
		<div>
			<h1>{`도서명 : ${props.name}`}</h1>
			<h2>{`정가 : ${props.price}`}</h2>
		</div>
	)
}



export default Book;