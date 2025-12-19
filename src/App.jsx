import { useState, useEffect } from "react";
import { loadTheme, saveTheme } from "./utils.js";

import Header from "./components/Header";

const App = () => {
    const [theme, setTheme] = useState(loadTheme() ?? "dark");

    function handleThemeToggle() {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        saveTheme(nextTheme);
    }

    return (
        <main className="gradient-light dark:gradient-dark" data-theme={theme}>
            <div className="mx-auto w-full max-w-360">
                <Header theme={theme} onThemeToggle={handleThemeToggle} />
            </div>
        </main>
    );
};

export default App;
