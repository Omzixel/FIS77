import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, message });
    }

    return (
        <section className="py-16 bg-[#fae3eb]">
            <div className="container mx-auto grid grid-cols-2 gap-8">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Your Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Your Email Address:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Your Message:</label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border p-2" required></textarea>
                        </div>

                        <button type="submit" className="bg-pink-500 text-white p-2">Send</button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p>Email: mail@gmail.com</p>
                    <p>Phone: 123 456 7890</p>
                    <p>Working Hours: Mon-Fri, 08:00 - 16:00</p>
                    <br />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.9084952343278!2d18.40974836618898!3d45.32292607269567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x268b19eaf3f8b15d%3A0x6cefe475adf82c17!2sSlatka%20%C5%BDelja!5e0!3m2!1sen!2shr!4v1706719714324!5m2!1sen!2shr"
                        width="100%"
                        height="300"
                        style={{ border: '0' }}
                        loading="lazy"
                        title="location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;
