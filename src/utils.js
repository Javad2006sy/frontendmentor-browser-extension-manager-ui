const EXTENSIONS_SRC = "/data.json";

// Theme Functions
export const loadTheme = () => {
    try {
        return localStorage.getItem("AppTheme");
    } catch (error) {
        console.warn("Failed to load theme from localStorage:", error);
    }
};

export const saveTheme = (theme) => {
    if (!theme || (theme !== "light" && theme !== "dark")) {
        console.warn("Invalid theme value:", theme);
        return;
    }

    try {
        localStorage.setItem("AppTheme", theme);
    } catch (error) {
        console.warn("Failed to save theme to localStorage", error);
    }
};

/**
 * Load extension metadata from the configured extensions JSON source.
 * @returns {Array<Object>} An array of extension objects parsed from the JSON; returns an empty array if loading or parsing fails.
 */
export async function fetchExtensions() {
    try {
        const data = await fetch(EXTENSIONS_SRC);
        const extensions = await data.json();

        return extensions;
    } catch (error) {
        console.warn("Failed to load extensions:", error);
        return [];
    }
}

/**
 * Resolve a base image path or URL to an absolute URL relative to this module.
 * @param {string} baseUrl - The image path or URL to resolve; may be relative to the module.
 * @returns {string} The resolved absolute URL string.
 */
export function getImageUrl(baseUrl) {
    return new URL(baseUrl, import.meta.url).href;
}