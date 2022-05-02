import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import EditIntern from "./components/pages/EditIntern";
import InternList from "./components/pages/InternList/InternList";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/themes";
import { lightTheme } from "./styles/lightTheme";
import { darkTheme } from "./styles/darkTheme";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Routes>
        <Route path="/interns/:id" exact element={<EditIntern />} />
        <Route path="/" element={<InternList />} />
      </Routes>

      <button onClick={() => themeToggler()}>Change Theme</button>
    </ThemeProvider>
  );
}

export default App;
