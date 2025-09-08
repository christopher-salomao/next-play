"use client";

import { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      className="rounded-full p-2 shadow-md shadow-purple-400 *:transition-all *:ease-in-out *:duration-300 dark:shadow-amber-400 dark:bg-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-600 hover:text-purple-400" />
      ) : (
        <FaSun className="text-gray-600 hover:text-amber-400" />
      )}
    </button>
  );
}
