import { FC } from "react";
import { TbMoodSad } from "react-icons/tb";
import fbLogo from "../images/fbLogo.svg";
import ytLogo from "../images/ytLogo.svg";
import igLogo from "../images/igLogo.svg";
import { Link } from "react-router-dom";

interface IProps {
  className: string;
  langName: string;
}

const NotFound: FC<IProps> = ({ className, langName }) => {
  return (
    <div
      className={`theme-${className}-text theme-${className}-main flex flex-col items-center justify-center min-h-screen p-4`}
    >
      <div className="mb-4">
        <TbMoodSad size={50} className="mx-auto" />
      </div>
      <p className="text-center text-3xl mb-2 font-semibold">
        Oops, page not found!
      </p>
      <p className="text-center mb-4 text-xl">
        The page you're looking for doesn't seem to exist. Please check the URL
        or try navigating back to the homepage.
      </p>
      <div className="w-full max-w-xs mb-6">
        <Link
          to="/"
          className="text-white block bg-red-600 py-2 px-4 rounded-sm text-center hover:bg-red-500"
        >
          Go to home page
        </Link>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/fotostudioivan77/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook link"
        >
          <img
            className="w-7 hover:scale-110 transition ease-out"
            src={fbLogo}
            alt="Facebook icon"
          />
        </a>
        <a
          href="https://www.instagram.com/foto_studio_ivan_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram link"
        >
          <img
            className="w-7 hover:scale-110 transition ease-out"
            src={igLogo}
            alt="Instagram icon"
          />
        </a>
        <a
          href="https://www.instagram.com/booth360event/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Second Instagram link"
        >
          <img
            className="w-7 hover:scale-110 transition ease-out"
            src={igLogo}
            alt="Second Instagram icon"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCSHL75T2yClooloeAyzZXiw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube link"
        >
          <img
            className="w-8 hover:scale-110 transition ease-out"
            src={ytLogo}
            alt="Youtube icon"
          />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
