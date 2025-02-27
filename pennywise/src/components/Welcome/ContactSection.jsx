import React from "react";
import { ContactUs } from "../ContactUs";

function ContactSection() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row justify-between items-center bg-background dark:bg-dark_background text-text p-8 md:p-12"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 font-content">
        <h2 className="text-3xl  font-header font-bold mb-4 dark:text-gray-200">
          Contact Us
        </h2>
        <p className="mb-6 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat
          dicta iusto reprehenderit eum nihil similique.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-xl mr-4">📞</span>
            <p className="text-gray-300">+1 (123) 456 7890</p>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-4">✉</span>
            <p className="text-gray-300">contact@xyzwebsite.com</p>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-4">📍</span>
            <p className="text-gray-300">11, Street 342, Abcd Fgh</p>
          </div>
        </div>

        {/* Social media Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="text-xl hover:text-gray-300">
            🌐
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            📘
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            📸
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            🕊
          </a>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export { ContactSection };
