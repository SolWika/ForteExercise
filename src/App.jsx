import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/themes";
import { lightTheme } from "./styles/lightTheme";
import { darkTheme } from "./styles/darkTheme";

import EditIntern from "./components/pages/EditIntern/EditIntern";
import InternList from "./components/pages/InternList/InternList";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

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
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <DarkModeSwitch
        style={{ position: "fixed", top: "40px", right: "40px" }}
        checked={isDarkTheme}
        onChange={() => themeToggler()}
        size={50}
        onClick={() => themeToggler()}
      />
    </ThemeProvider>
  );
}

export default App;
