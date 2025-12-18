// Theme Functions
export const loadTheme = () => localStorage.getItem("AppTheme");

export const saveTheme = (theme) => localStorage.setItem("AppTheme", theme);
