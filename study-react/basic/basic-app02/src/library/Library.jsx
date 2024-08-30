import React from "react";
import Book from "./Book";

function Library(props) {
	return (
		<div>
			<Book name="이것이 파이썬이다." numOfPage={500} />
			<Book name="이것이 코딩테스트다." numOfPage={400} />
			<Book name="이것이 머신러닝이다." numOfPage={450} />
		</div>
	)
}

export default Library;