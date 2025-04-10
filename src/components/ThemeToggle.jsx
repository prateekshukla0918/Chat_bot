import React from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      <RiSunLine className="text-gray-700 dark:hidden" />
      <RiMoonLine className="text-gray-200 hidden dark:block" />
    </button>
  );
};

export default ThemeToggle;
