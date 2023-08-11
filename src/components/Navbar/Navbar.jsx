// import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import "./Navbar.scss";

export const Navbar = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <div className={`Navbar ${isDarkMode ? "dark" : "light"}`}>
      <p>
        Pawel-<span>W88</span>
      </p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
