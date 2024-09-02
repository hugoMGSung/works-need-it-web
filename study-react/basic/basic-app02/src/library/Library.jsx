import React from "react";
import Book from "./Book";

function Library(props) {
	return (
		<div>
			<Book name="이것이 데이터 분석이다 with 파이썬" price={28000} />
			<Book name="이것이 C#이다" price={36000} />
			<Book name="이것이 C++이다" price={25000} />
		</div>
	)
}

export default Library;