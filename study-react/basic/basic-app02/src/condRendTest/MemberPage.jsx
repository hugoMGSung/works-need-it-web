import React, { useState } from 'react';
import Toolbar from './Toolbar';

function MemberPage(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onClickLogin = () => {
		setIsLoggedIn(true);
	};

	const onClickLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<Toolbar isLoggedIn={isLoggedIn}
					onClickLogin={onClickLogin}
					onClickLogout={onClickLogout} />
			<div style={{ padding: 16 }}>멤버</div>
		</div>
	);
}

export default MemberPage;