import { useState, FC } from "react";
import { textContent } from "@/components/text components/Contact_TC";
import emailjs from "@emailjs/browser";

interface IProps {
  className: string;
  langName: string;
}

const Contact: FC<IProps> = ({ className, langName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const templateParams = {
      username: name,
      email,
      message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response: any) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error: any) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <section className={`theme-${className}-text theme-${className}-main`}>
      <section
        className="bg-cover h-96"
        style={{
          backgroundImage:
            'url("https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg")',
        }}
      ></section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-5">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-8">
            {langName === "eng" ? textContent.eng.title : textContent.cro.title}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                {langName === "eng"
                  ? textContent.eng.section_form.name
                  : textContent.cro.section_form.name}
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
                {langName === "eng"
                  ? textContent.eng.section_form.email
                  : textContent.cro.section_form.email}
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
                {langName === "eng"
                  ? textContent.eng.section_form.text
                  : textContent.cro.section_form.text}
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
              className="bg-red-600 text-white w-full p-2 rounded-sm hover:bg-red-500"
            >
              {langName === "eng"
                ? textContent.eng.section_form.btn
                : textContent.cro.section_form.btn}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            {langName === "eng"
              ? textContent.eng.section_info.miniTitle
              : textContent.cro.section_info.miniTitle}
          </h2>
          <p>
            {langName === "eng"
              ? textContent.eng.section_info.email
              : textContent.cro.section_info.email}
          </p>
          <p>
            {langName === "eng"
              ? textContent.eng.section_info.phone
              : textContent.cro.section_info.phone}
          </p>
          <p>
            {langName === "eng"
              ? textContent.eng.section_info.workingHours
              : textContent.cro.section_info.workingHours}
          </p>
          <br />
          <div className="map-container border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.181713586857!2d18.675519076622386!3d45.28454964540689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cf5f23980f7c9%3A0xb85fac8a9e7b813!2sGorjani%2081%2C%2032281%2C%20Ivankovo!5e0!3m2!1sen!2shr!4v1711467646995!5m2!1sen!2shr"
              width="100%"
              height="300"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
