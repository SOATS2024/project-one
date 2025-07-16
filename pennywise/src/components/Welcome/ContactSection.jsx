import React from "react";
import { ContactUs } from "../ContactUs";
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Twitter } from "lucide-react";

function ContactSection() {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row justify-between items-center bg-background dark:bg-dark_background text-text dark:text-dark_text p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-md mx-auto container mt-12 mb-0"
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 font-content">
        <h2 className="text-2xl sm:text-3xl font-header font-bold mb-4 text-primary dark:text-dark_primary">
          Contact Us
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-md">
          Interested in our work? Send us a message and we'll work on your dream website. Together!
        </p>
        <div className="space-y-6">
          
          <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary dark:bg-dark_secondary text-white mr-4">
              <Mail className="h-5 w-5" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-dark_primary transition-colors duration-300">soats2024@gmail.com</p>
          </div>
          <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary dark:bg-dark_secondary text-white mr-4">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-dark_primary transition-colors duration-300">Hyderabad, Sindh, Pakistan</p>
          </div>
        </div>

      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <ContactUs />
      </div>
    </div>
  );
}

export { ContactSection };
