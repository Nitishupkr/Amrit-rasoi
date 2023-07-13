import React from "react";
import Toggle from "react-toggle";
import { FaSun, FaMoon } from "react-icons/fa";
import "react-toggle/style.css";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label>
      <Toggle
        checked={isDarkMode}
        onChange={toggleDarkMode}
        icons={{
          checked: <FaSun />,
          unchecked: <FaMoon />,
        }}
      />
    </label>
  );
};

export default DarkModeToggle;
