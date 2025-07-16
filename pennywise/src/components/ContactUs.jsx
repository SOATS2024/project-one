import { useState } from "react";
import { Send } from "lucide-react";

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
      body: formData,
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
    <div className="w-full bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <form onSubmit={onSubmit}>
        <h2 className="text-xl sm:text-2xl font-header font-bold mb-6 text-primary dark:text-dark_primary flex items-center gap-2">
          Send us a message
        </h2>
        {result && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md text-sm">
            {result}
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block font-semibold mb-2 font-header text-gray-700 dark:text-gray-300"
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
            className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark_primary focus:border-transparent font-content disabled:opacity-50 dark:bg-slate-800 transition-all duration-300"
            placeholder="Your name"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-semibold mb-2 font-header text-gray-700 dark:text-gray-300"
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
            className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark_primary focus:border-transparent font-content disabled:opacity-50 dark:bg-slate-800 transition-all duration-300"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block font-semibold mb-2 font-header text-gray-700 dark:text-gray-300"
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
            className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark_primary focus:border-transparent font-content disabled:opacity-50 dark:bg-slate-800 transition-all duration-300"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full font-header bg-secondary text-white py-3 px-4 rounded-lg hover:bg-hover_secondary transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" />
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};
export { ContactUs };
