import { useState, useEffect } from "react";
import { loadTheme, saveTheme } from "./utils.js";

import Header from "./components/Header";

const App = () => {
	const [theme, setTheme] = useState("dark");

	function handleThemeToggle() {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
		saveTheme(nextTheme);
	}

	useEffect(() => {
		const appTheme = loadTheme();

		if (appTheme) {
			setTheme(appTheme);
		}
	}, []);

	return (
		<main className="gradient-light dark:gradient-dark" data-theme={theme}>
			<Header theme={theme} onThemeToggle={handleThemeToggle} />
		</main>
	);
};

export default App;
