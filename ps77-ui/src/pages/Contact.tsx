import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Your Email Address:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Your Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-1/6 p-1 rounded-sm hover:bg-blue-500"
            >
              Send
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>Email: mail@gmail.com</p>
          <p>Phone: 123 456 7890</p>
          <p>Working Hours: Mon-Fri, 08:00 - 16:00</p>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.747392959472!2d18.408357876623555!3d45.313528143478564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c5585716b977d%3A0x6e6062a1a42d681f!2sLidl!5e0!3m2!1sen!2shr!4v1709053810766!5m2!1sen!2shr"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
