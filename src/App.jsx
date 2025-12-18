import { useState, useEffect } from "react";
import { loadTheme, saveTheme } from "./utils.js";

import Header from "./components/Header";
import { Button } from "./components/base";

const App = () => {
  const [theme, setTheme] = useState(loadTheme() ?? "dark");

  function handleThemeToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  return (
    <main className="gradient-light dark:gradient-dark" data-theme={theme}>
      {/* <Header theme={theme} onThemeToggle={handleThemeToggle} /> */}
      <Button onClick={handleThemeToggle}>Click</Button>
    </main>
  );
};

export default App;
