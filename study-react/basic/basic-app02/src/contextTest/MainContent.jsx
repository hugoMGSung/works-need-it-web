import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
	const {theme, toggleTheme} = useContext(ThemeContext);

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				padding: '1.5rem',
				backgroundColor: theme == 'dark' ? 'black' : 'white',
				color: theme == 'dark' ? 'white' :'black',
			}}
		>	
			<p>I'm... IronMan.</p>
			<button onClick={toggleTheme}>테마변경</button>
		</div>
	);
}

export default MainContent;