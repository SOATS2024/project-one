import { useState } from "react";

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
   
      
     
     

      <div className="w-full md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-header font-bold mb-4">Send us a message</h2>
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
   
  );
};
export { ContactUs };
