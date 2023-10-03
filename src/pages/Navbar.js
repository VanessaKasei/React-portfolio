// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full z-10">
      <ul className="flex justify-end space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#about" className="text-white">About</a></li>
        <li><a href="#skills" className="text-white">Skills</a></li>
        <li><a href="#projects" className="text-white">Projects</a></li>
        <li><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
