import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/HomePage/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import ThemeContext from "./ThemeContext";
import "./App.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={`App ${isDarkMode ? "dark" : "light"}`}>
        <HashRouter>
          <Navbar />
          <div className="switch">
            <label>{isDarkMode ? "Dark Mode" : "Light Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={isDarkMode} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" />
          </Routes>
        </HashRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
