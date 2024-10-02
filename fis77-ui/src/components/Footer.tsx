import { FC } from "react";
import { textContent } from "@/components/text components/FooterTC";
import fbLogo from "../images/fbLogo.svg";
import ytLogo from "../images/ytLogo.svg";
import igLogo from "../images/igLogo.svg";

interface IProps {
  langName: string;
}

const Footer: FC<IProps> = ({ langName }) => {
  return (
    <footer className="text-white p-4 bg-zinc-800 font-semibold">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        <section>
          <address className="not-italic">
            <p>
              {langName === "eng"
                ? textContent.eng.first_element
                : textContent.cro.first_element}
            </p>
            <p>
              {langName === "eng"
                ? textContent.eng.second_element
                : textContent.cro.second_element}
            </p>
            <p>
              {langName === "eng"
                ? textContent.eng.third_element
                : textContent.cro.third_element}
            </p>
            <p>
              {langName === "eng"
                ? textContent.eng.fourth_element
                : textContent.cro.fourth_element}
            </p>
          </address>
        </section>

        <section className="mt-4 md:mt-0">
          <p className="">
            {langName === "eng"
              ? textContent.eng.fifth_element
              : textContent.cro.fifth_element}
          </p>
          <nav aria-label="Social Media Links">
            <ul className="flex space-x-4 mt-1">
              <li>
                <a
                  href="https://www.facebook.com/fotostudioivan77/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  title="Facebook Page"
                >
                  <img
                    className="w-7 hover:scale-110 transition ease-out"
                    src={fbLogo}
                    alt="Facebook logo for Foto Studio Ivan"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/foto_studio_ivan_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram profile"
                  title="Instagram Profile"
                >
                  <img
                    className="w-7 hover:scale-110 transition ease-out"
                    src={igLogo}
                    alt="Instagram logo for Foto Studio Ivan"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/booth360event/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Booth 360 Event Instagram profile"
                  title="Instagram Profile for Booth 360 Event"
                >
                  <img
                    className="w-7 hover:scale-110 transition ease-out"
                    src={igLogo}
                    alt="Instagram logo for Booth 360 Event"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCSHL75T2yClooloeAyzZXiw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Youtube channel"
                  title="YouTube Channel"
                >
                  <img
                    className="w-8 hover:scale-110 transition ease-out"
                    src={ytLogo}
                    alt="YouTube logo for Foto Studio Ivan"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
