import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";
import PropTypes from "prop-types";

const Navbar = ({ isWelcome }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
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
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-row bg-white dark:bg-slate-950 justify-between px-5 pb-5 pt-3 shadow-md transition-colors duration-300">
      <div className="flex flex-row items-center justify-center">
        <Logo height={60} width={60} />
        <div className="font-pennywise text-text dark:text-gray-200 text-3xl font-bold">
          enny
          <span className="text-secondary dark:text-dark_secondary">Wise</span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full  text-secondary dark:text-dark_secondary hover:text-hover_secondary dark:hover:text-dark_hover_secondary transition-colors"
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
        <div class="h-full w-0.5  bg-neutral-100 dark:bg-white/10"></div>
        <button
          type="button"
          className="bg-white dark:bg-slate-950 px-4 py-1.5 rounded-md text-primary dark:text-dark_primary border-2 border-primary dark:border-dark_primary text-base font-medium hover:bg-background dark:hover:bg-slate-950 dark:hover:border-dark_hover_secondary dark:hover:text-dark_hover_secondary font-content"
          onClick={handleContactUs}
        >
          Contact Us
        </button>
        {isWelcome && (
          <button
            type="button"
            className="bg-secondary dark:bg-dark_secondary px-4 py-2 rounded-md text-white dark:text-slate-950 text-base font-medium hover:bg-background dark:hover:bg-dark_hover_secondary dark:hover:border-dark_hover_secondary  font-content"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isWelcome: PropTypes.bool,
};

export { Navbar };
