import React, { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = useCallback(() => {
		if (theme == 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<MainContent />
		</ThemeContext.Provider>
	);
}

export default DarkOrLight;