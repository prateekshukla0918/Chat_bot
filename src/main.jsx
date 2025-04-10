import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize theme from localStorage or system preference
const initializeTheme = () => {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Set theme initially
initializeTheme();

createRoot(document.getElementById("root")).render(<App />);