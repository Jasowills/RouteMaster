import React, { useState } from 'react';
import { FaMoon, FaSun, FaUserCircle, FaCog, FaBars, FaChevronDown } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = ({ toggleDarkMode, darkMode, toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-950 text-black dark:text-white">
      {/* Logo & Dashboard Title */}
      <div className="flex items-center space-x-1">
        <img
          src={logo}  // Replace with your logo
          alt="Logo"
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-semibold text-blue-400 dark:text-gray-200">RouteMaster</h1>
      </div>

      {/* Navbar Links - Hidden on small screens */}
      <div className="hidden md:flex space-x-6">
        <a
          href="#dashboard"
          className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Dashboard
        </a>
        <a
          href="#settings"
          className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Account Settings
        </a>
        <a
          href="#reports"
          className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Route Reports
        </a>
      </div>

      {/* Mobile Dropdown for Hidden Links */}
      <div className="md:hidden flex items-center space-x-3">
        <button
          onClick={toggleDropdown}
          className="text-lg text-gray-800 dark:text-gray-200"
        >
          <FaChevronDown size={20} />
        </button>

        {dropdownOpen && (
          <div className="absolute top-16 flex flex-col justify-center  right-6 bg-white dark:bg-gray-950 text-black dark:text-white shadow-lg rounded-lg w-48 p-4 space-y-3">
            <a
              href="#dashboard"
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
            Dashboard
            </a>
            <a
              href="#settings"
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
            Account Settings
            </a>
            <a
              href="#reports"
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
             Route Reports
            </a>
          </div>
        )}
      </div>

      {/* User Profile and Dark Mode Toggle */}
      <div className="flex items-center space-x-6">
        {/* Hamburger Icon for Mobile Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 md:hidden"
        >
          <FaBars size={20} />
        </button>

        {/* User Avatar/Profile */}
        <div className="hidden md:flex items-center space-x-2">
          <FaUserCircle className="text-xl text-gray-800 dark:text-gray-200" />
          <span className="text-sm text-gray-800 dark:text-gray-200">John Doe</span>
        </div>

        {/* Settings Icon */}
        <button className="p-2 hidden md:flex text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
          <FaCog size={20} />
        </button>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none transition duration-300"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-gray-500" size={20} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
