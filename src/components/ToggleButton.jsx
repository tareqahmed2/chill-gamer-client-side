import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center my-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="w-14 h-8 border-2 flex items-center border-gray-300 rounded-full peer peer-checked:border-gray-600 peer-checked:bg-gray-800 bg-blue-200 transition">
          <div
            className={`w-6 h-6 bg-purple-500 border border-gray-300 rounded-full shadow-md transform transition-transform ${
              theme === "dark" ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
        {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span> */}
      </label>
    </div>
  );
}

export default ToggleButton;
