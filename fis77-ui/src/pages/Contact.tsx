import { textContent } from "@/components/text components/ContactTC";
import emailjs from "@emailjs/browser";
import { FC, FormEvent, useState, useEffect } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(0);

  const updateErrorMessage = () => {
    const errMsg =
      langName === "eng" ? textContent.eng.errorMsg : textContent.cro.errorMsg;
    setErrorMsg(errMsg);
  };

  const updateSuccessfullMessage = () => {
    const succMsg =
      langName === "eng"
        ? textContent.eng.successfullMsg
        : textContent.cro.successfullMsg;
    setSuccessfullMsg(succMsg);
  };

  useEffect(() => {
    const savedCooldown = localStorage.getItem("cooldown");
    const savedCooldownTime = localStorage.getItem("cooldownTime");

    if (savedCooldown && savedCooldownTime) {
      const remainingTime = parseInt(savedCooldownTime, 10) - Date.now();
      if (remainingTime > 0) {
        setCooldown(true);
        setCooldownTimer(Math.floor(remainingTime / 1000));
      } else {
        localStorage.removeItem("cooldown");
        localStorage.removeItem("cooldownTime");
      }
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldownTimer > 0) {
      timer = setTimeout(() => {
        setCooldownTimer(cooldownTimer - 1);
      }, 1000);
    } else if (cooldownTimer === 0 && cooldown) {
      setCooldown(false);
      localStorage.removeItem("cooldown");
      localStorage.removeItem("cooldownTime");
    }
    return () => clearTimeout(timer);
  }, [cooldownTimer, cooldown]);

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
        updateSuccessfullMessage();
        setCooldown(true);
        const cooldownTime = Date.now() + 10000;
        localStorage.setItem("cooldown", "true");
        localStorage.setItem("cooldownTime", cooldownTime.toString());
        setCooldownTimer(60);
        setTimeout(() => {
          setSuccessfullMsg("");
        }, 4000);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        updateErrorMessage();
        setTimeout(() => {
          setErrorMsg("");
        }, 4000);
        setSpinner(false);
      });
  };

  return (
    <section className={`theme-${className}-text theme-${className}-main`}>
      <header
        className="bg-cover h-96"
        style={{
          backgroundImage: 'url("https://anjix3.sirv.com/Images/contact.jpg")',
        }}
        aria-label="Contact page header image"
      ></header>

      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-5">
        <article>
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
          <section aria-labelledby="location-ivankovo">
            <h3 id="location-ivankovo" className="font-bold">
              Ivankovo
            </h3>
            <div className="map-container border border-gray-300 rounded-sm">
              <iframe
                title="Ivankovo location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.181713586857!2d18.675519076622386!3d45.28454964540689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cf5f23980f7c9%3A0xb85fac8a9e7b813!2sGorjani%2081%2C%2032281%2C%20Ivankovo!5e0!3m2!1sen!2shr!4v1711467646995!5m2!1sen!2shr"
                width="100%"
                height="300"
                className="border-0"
                loading="lazy"
                aria-label="Google map showing Ivankovo location"
              ></iframe>
            </div>
          </section>

          <br />
          <section aria-labelledby="location-zagreb">
            <h3 id="location-zagreb" className="font-bold">
              Zagreb
            </h3>
            <div className="map-container border border-gray-300 rounded-sm">
              <iframe
                title="Zagreb location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.201861984417!2d15.898022276644411!3d45.80721551048621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d11567facb51%3A0x5d647405c763b360!2sUl.%20Janka%20Matka%202%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1716305654094!5m2!1shr!2shr"
                width="100%"
                height="300"
                className="border-0"
                loading="lazy"
                aria-label="Google map showing Zagreb location"
              ></iframe>
            </div>
          </section>
        </article>

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
                className="w-full border p-2 rounded-sm text-black"
                required
                aria-label="Your full name"
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
                className="w-full border p-2 rounded-sm text-black"
                required
                aria-label="Your email address"
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
                className="w-full border p-2 rounded-sm text-black"
                required
                aria-label="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-red-600 text-white w-full p-2 rounded-sm ${
                spinner || cooldown
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-red-500"
              }`}
              disabled={spinner || cooldown}
            >
              {cooldown
                ? langName === "eng"
                  ? `${cooldownTimer} ${textContent.eng.timeRemaining}`
                  : `${cooldownTimer} ${textContent.cro.timeRemaining}`
                : langName === "eng"
                ? textContent.eng.section_form.btn
                : textContent.cro.section_form.btn}
            </button>

            {successfullMsg && (
              <div className="items-center justify-center mt-3 font-bold px-5 text-center">
                <span className="text-green-500 mr-2">{successfullMsg}</span>
                <IoIosCheckmarkCircleOutline
                  className="text-green-500 mx-auto"
                  size={30}
                />
              </div>
            )}
            {errorMsg && (
              <div className="items-center justify-center mt-3 font-bold px-5 text-center">
                <span className="text-red-500">{errorMsg}</span>
                <IoIosCloseCircleOutline
                  className="text-red-500 mx-auto"
                  size={30}
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
      </main>
    </section>
  );
};

export default Contact;
