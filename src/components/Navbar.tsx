"use client";

import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0a0b1e] text-white">
      <div className="text-xl font-semibold">Umama Rajput</div>
      <ul className="flex space-x-8 text-lg">
        <li className="hover:underline underline-offset-4">Blog</li>
        <li className="hover:underline underline-offset-4">Projects</li>
        <li className="hover:underline underline-offset-4">About</li>
        <li className="hover:underline underline-offset-4">Newsletter</li>
      </ul>
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={toggleDarkMode}
      >
        <div
          className={`w-10 h-6 flex items-center bg-gray-600 rounded-full p-1 ${
            darkMode ? "justify-end" : "justify-start"
          }`}
        >
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <span className="text-sm">{darkMode ? "🌙" : "☀️"}</span>
      </div>
    </nav>
  );
}
