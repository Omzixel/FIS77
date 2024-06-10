import { textContent } from "@/components/text components/Contact_TC";
import emailjs from "@emailjs/browser";
import { FC, FormEvent, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface IProps {
  className: string;
  langName: string;
}

const Contact: FC<IProps> = ({ className, langName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [successfullMsg, setSuccessfullMsg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSpinner(true);
    e.preventDefault();

    const templateParams = {
      username: name,
      email,
      message,
    };

    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const userID = import.meta.env.VITE_USER_ID;

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setSpinner(false);
        setSuccessfullMsg("Your message was sent successfully");
        setTimeout(() => {
          setSuccessfullMsg("");
        }, 4000);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setSpinner(false);
      });
  };

  return (
    <section className={`theme-${className}-text theme-${className}-main`}>
      <section
        className="bg-cover h-96"
        style={{
          backgroundImage: 'url("https://anjix3.sirv.com/Images/contact.jpg")',
        }}
      ></section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-5">
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
          <p className="font-bold">Ivankovo</p>
          <div className="map-container border border-gray-300 rounded-sm">
            <iframe
              title="Ivankovo location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.181713586857!2d18.675519076622386!3d45.28454964540689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cf5f23980f7c9%3A0xb85fac8a9e7b813!2sGorjani%2081%2C%2032281%2C%20Ivankovo!5e0!3m2!1sen!2shr!4v1711467646995!5m2!1sen!2shr"
              width="100%"
              height="300"
              className="border-0"
            ></iframe>
          </div>
          <br />
          <p className="font-bold">Zagreb</p>
          <div className="map-container border border-gray-300 rounded-sm">
            <iframe
              title="Zagreb location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.201861984417!2d15.898022276644411!3d45.80721551048621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d11567facb51%3A0x5d647405c763b360!2sUl.%20Janka%20Matka%202%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1716305654094!5m2!1shr!2shr"
              width="100%"
              height="300"
              className="border-0"
            ></iframe>
          </div>
        </div>
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-8">
            {langName === "eng" ? textContent.eng.title : textContent.cro.title}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block">
                {langName === "eng"
                  ? textContent.eng.section_form.name
                  : textContent.cro.section_form.name}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block">
                {langName === "eng"
                  ? textContent.eng.section_form.email
                  : textContent.cro.section_form.email}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block">
                {langName === "eng"
                  ? textContent.eng.section_form.text
                  : textContent.cro.section_form.text}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border p-2 rounded-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-red-600 text-white w-full p-2 rounded-sm hover:bg-red-500 ${
                spinner ? "cursor-not-allowed opacity-50" : "hover:bg-red-500"
              }`}
              disabled={spinner}
            >
              {langName === "eng"
                ? textContent.eng.section_form.btn
                : textContent.cro.section_form.btn}
            </button>

            {successfullMsg && (
              <div className="flex items-center justify-center mt-3 font-bold">
                <span className="text-green-500 mr-2">{successfullMsg}</span>
                <IoIosCheckmarkCircleOutline
                  className="text-green-500"
                  size={25}
                />
              </div>
            )}
            {spinner && (
              <div className="flex justify-center items-center mt-3">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-700"></div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
