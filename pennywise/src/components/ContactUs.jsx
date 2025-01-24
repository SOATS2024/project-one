const ContactUs = () => {
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
        <form>
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
