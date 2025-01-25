<<<<<<< HEAD
import { useState } from "react";

=======
>>>>>>> abee53172221b461ce46c22bb69e9b40fe01e633
const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_APP_WEBFORM_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-background text-text p-8 md:p-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 font-content">
        <h2 className="text-3xl  font-header font-bold mb-4">Contact Us</h2>
        <p className="mb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat
          dicta iusto reprehenderit eum nihil similique.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-xl mr-4">📞</span>
            <p>+1 (123) 456 7890</p>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-4">✉</span>
            <p>contact@xyzwebsite.com</p>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-4">📍</span>
            <p>11, Street 342, Abcd Fgh</p>
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
      {/* Right Section */}
      
      <div className="w-full md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-semibold mb-2 font-header"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none  focus:border-primary focus:ring-primary focus:ring-1 font-content disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold mb-2 font-header"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 font-content disabled:opacity-50"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-semibold mb-2 font-header"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 font-content disabled:opacity-50"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-header bg-secondary text-white py-3 rounded-lg hover:bg-hover_secondary"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
export { ContactUs };