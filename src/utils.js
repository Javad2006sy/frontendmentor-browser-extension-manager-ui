const EXTENSIONS_SRC = "./data.json";

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

// Extensions Loader
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

// a helper to produce extension's image URL
export function getImageUrl(baseUrl) {
    return new URL(baseUrl, import.meta.url).href;
}
