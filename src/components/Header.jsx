import React from "react";
import ThemeToggle from "./ThemeToggle";
import { RiRobotFill } from "react-icons/ri";

const Header = ({ toggleTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm px-4 py-3 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <RiRobotFill className="text-primary text-xl" />
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">ChatBot</h1>
      </div>
      <ThemeToggle toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
