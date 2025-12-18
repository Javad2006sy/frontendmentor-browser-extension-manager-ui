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
