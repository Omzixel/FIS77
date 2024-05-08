import { FC } from "react";
import { textContent } from "@/components/text components/Footer_TC";
import fbLogo from "../images/fbLogo.svg";
import ytLogo from "../images/ytLogo.svg";
import igLogo from "../images/igLogo.svg";

interface IProps {
  langName: string;
}

const Footer: FC<IProps> = ({ langName }) => {
  return (
    <footer className="text-white p-4 bg-zinc-800 font-semibold">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="">
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
        </div>

        <div className="mt-4 md:mt-0">
          <p className="">
            {langName === "eng"
              ? textContent.eng.fourth_element
              : textContent.cro.fourth_element}
          </p>
          <div className="flex space-x-4 mt-1">
            <a
              href="https://www.facebook.com/fotostudioivan77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-7 hover:scale-110 transition ease-out"
                src={fbLogo}
              />
            </a>
            <a
              href="https://www.instagram.com/foto_studio_ivan_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-7 hover:scale-110 transition ease-out"
                src={igLogo}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSHL75T2yClooloeAyzZXiw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 hover:scale-110 transition ease-out"
                src={ytLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
