import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Facebook, Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-950 pt-10 pb-6 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section with Logo, Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo height={40} width={40} />
              <div className="font-pennywise text-text dark:text-gray-200 text-2xl font-bold">
                enny
                <span className="text-secondary dark:text-dark_secondary">Wise</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-content">
              Your personal expense tracker designed to help you manage your finances with ease.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-primary dark:text-dark_primary mb-4 font-header">Quick Links</h3>
            <ul className="space-y-2 font-content">
              <li>
                <HashLink 
                  to="/#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-dark_secondary transition-colors"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <NavLink 
                  to="/login" 
                  className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-dark_secondary transition-colors"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/register" 
                  className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-dark_secondary transition-colors"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <HashLink 
                  to="/#contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-dark_secondary transition-colors"
                >
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>
          
          {/* Features */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-primary dark:text-dark_primary mb-4 font-header">Features</h3>
            <ul className="space-y-2 font-content">
              <li className="text-gray-600 dark:text-gray-400">Expense Tracking</li>
              <li className="text-gray-600 dark:text-gray-400">Budget Management</li>
              <li className="text-gray-600 dark:text-gray-400">Financial Reports</li>
              <li className="text-gray-600 dark:text-gray-400">Secure Data Storage</li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-primary dark:text-dark_primary mb-4 font-header">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-content">
              Have questions or feedback? Reach out to our team.
            </p>
            <HashLink 
              to="/#contact" 
              className="inline-block bg-secondary dark:bg-dark_secondary text-white dark:text-slate-950 px-4 py-2 rounded-md font-medium hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary transition-colors font-content"
            >
              Get in Touch
            </HashLink>
          </div>
        </div>
        
        
        
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-content mb-4 md:mb-0">
              © {currentYear} PennyWise. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
