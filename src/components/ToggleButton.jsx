import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="swap swap-rotate my-4">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="toggle theme-controller"
      />
      <div className="swap-on">🌙</div>
      <div className="swap-off">🌞</div>
    </label>
  );
}

export default ToggleButton;
