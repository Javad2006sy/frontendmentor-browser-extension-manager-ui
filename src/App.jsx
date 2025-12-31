import { useState, useEffect } from "react";
import { loadTheme, saveTheme, fetchExtensions, getImageUrl } from "./utils.js";

import Header from "./components/Header";
import ExtensionList from "./components/ExtensionList.jsx";

const App = () => {
    const [theme, setTheme] = useState(loadTheme() ?? "dark");
    const [extensionsList, setExtensionsList] = useState([]);

    useEffect(() => {
        async function loadExtensions() {
            const data = await fetchExtensions();

            setExtensionsList(
                data.map((item) => {
                    return {
                        ...item,
                        logo: getImageUrl(item.logo),
                    };
                }),
            );
        }

        loadExtensions();
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    function handleThemeToggle() {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        saveTheme(nextTheme);
    }

    function handleExtensionManagement(extensionsUpdate) {
        setExtensionsList(extensionsUpdate);
    }

    return (
        <main>
            <div className="mx-auto w-full max-w-360">
                <Header theme={theme} onThemeToggle={handleThemeToggle} />
                <ExtensionList
                    extensions={extensionsList}
                    onExtensionManagement={handleExtensionManagement}
                />
            </div>
        </main>
    );
};

export default App;
