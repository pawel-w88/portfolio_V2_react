import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import ThemeContext from "./ThemeContext";
import "./App.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState("true");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={`App ${isDarkMode ? "dark" : "light"}`}>
        <Router>
          <Navbar />
          <div className="switch">
            <label>{isDarkMode ? "Dark Mode" : "Light Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={isDarkMode} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="/#" />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
