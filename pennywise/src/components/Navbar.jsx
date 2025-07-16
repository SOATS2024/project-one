import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Moon, Sun, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import PropTypes from "prop-types";


const Navbar = ({ isWelcome }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleContactUs = () => {
    navigate("#contact");
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white dark:bg-slate-950 shadow-md transition-colors duration-300">
      <div className="flex flex-row justify-between items-center px-4 sm:px-5 py-3">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center">
          <Logo height={50} width={50} />
          <div className="font-pennywise text-text dark:text-gray-200 text-2xl sm:text-3xl font-bold">
            enny
            <span className="text-secondary dark:text-dark_secondary">Wise</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-secondary dark:text-dark_secondary hover:text-hover_secondary dark:hover:text-dark_hover_secondary transition-colors"
          >
            <div className="tooltip">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              {darkMode ? (
                <span className="tooltiptext">Toggle Light Mode</span>
              ) : (
                <span className="tooltiptext">Toggle Dark Mode</span>
              )}
            </div>
          </button>
          <div className="h-full w-0.5 bg-neutral-100 dark:bg-white/10"></div>
          <HashLink
            type="button"
            className="bg-white dark:bg-slate-950 px-4 py-1.5 rounded-md text-primary dark:text-dark_primary border-2 border-primary dark:border-dark_primary text-base font-medium hover:bg-background dark:hover:bg-slate-950 dark:hover:border-dark_hover_secondary dark:hover:text-dark_hover_secondary font-content"
            to={"#contact"}
          >
            Contact Us
          </HashLink>
          {isWelcome && (
            <button
              type="button"
              className="bg-secondary dark:bg-dark_secondary px-4 py-2 rounded-md text-white dark:text-slate-950 text-base font-medium hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary dark:hover:border-dark_hover_secondary font-content"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full text-secondary dark:text-dark_secondary hover:text-hover_secondary dark:hover:text-dark_hover_secondary transition-colors"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-secondary dark:text-dark_secondary hover:text-hover_secondary dark:hover:text-dark_hover_secondary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 px-4 py-3 shadow-inner border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col space-y-3">
            <HashLink
              to={"#contact"}
              className="py-2 px-3 rounded-md text-primary dark:text-dark_primary hover:bg-background dark:hover:bg-slate-900 font-medium font-content transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </HashLink>
            {isWelcome && (
              <button
                type="button"
                className="py-2 px-3 rounded-md text-left bg-secondary dark:bg-dark_secondary text-white dark:text-slate-950 font-medium hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary font-content transition-colors"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  isWelcome: PropTypes.bool,
};

export { Navbar };
