import { useState, useEffect } from "react";
import { loadTheme, saveTheme, fetchExtensions, getImageUrl } from "./utils.js";

import Header from "./components/Header";
import ExtensionList from "./components/ExtensionList.jsx";

const App = () => {
    const [theme, setTheme] = useState(loadTheme() ?? "dark");
    const [extensionsList, setExtensionsList] = useState([]);

    useEffect(() => {
        /**
         * Loads extension metadata, converts each item's logo path to a full image URL, and stores the result in component state.
         *
         * This function fetches extension data, maps each item to include `logo: getImageUrl(item.logo)`, and calls `setExtensionsList` with the transformed array.
         */
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

    /**
     * Toggle the app theme between "light" and "dark" and persist the selection.
     *
     * Updates component state with the new theme and saves the choice for future sessions.
     */
    function handleThemeToggle() {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        saveTheme(nextTheme);
    }

    /**
     * Replace the current extensions list in state with the provided array.
     * @param {Array<Object>} extensionsUpdate - Array of extension objects to set; each object should include extension properties (for example: `id`, `name`, and `logo` as a URL string).
     */
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