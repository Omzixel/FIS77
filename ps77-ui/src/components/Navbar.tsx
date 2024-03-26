import { useState, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { textContent } from "@/components/text components/Navbar_TC";
import { TbSunHigh } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";

import logoImg from "../images/logo.jpg";

interface IProps {
  chooseTheme: (isLightTheme: boolean) => void;
  isLightTheme: boolean;
  setCssTheme: (className: string) => void;
  className: string;

  chooseLang: (isLangEng: boolean) => void;
  isLangEng: boolean;
  setCssLang: (langName: string) => void;
  langName: string;
}

const Navbar: FC<IProps> = ({
  chooseTheme,
  isLightTheme,
  setCssTheme,
  className,
  chooseLang,
  isLangEng,
  setCssLang,
  langName,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation();

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <div className={`theme-${className}-main theme-${className}-text`}>
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <img className="w-14 rounded-xl" src={logoImg} alt="" />
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                ></a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <Link
                  to="/"
                  className={`hover:text-red-500 font-medium relative group ${
                    location.pathname === "/" ? "border-b-2 border-red-500" : ""
                  }`}
                >
                  {langName === "eng"
                    ? textContent.eng.first_route
                    : textContent.cro.first_route}
                  {location.pathname !== "/" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
                <Link
                  to="/products"
                  className={`hover:text-red-500 font-medium relative group ${
                    location.pathname === "/products"
                      ? "border-b-2 border-red-500"
                      : ""
                  }`}
                >
                  {langName === "eng"
                    ? textContent.eng.second_route
                    : textContent.cro.second_route}
                  {location.pathname !== "/products" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
                <Link
                  to="/gallery"
                  className={`hover:text-red-500 font-medium relative group ${
                    location.pathname === "/gallery"
                      ? "border-b-2 border-red-500"
                      : ""
                  }`}
                >
                  {langName === "eng"
                    ? textContent.eng.third_route
                    : textContent.cro.third_route}
                  {location.pathname !== "/gallery" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
                <Link
                  to="/about"
                  className={`hover:text-red-500 font-medium relative group ${
                    location.pathname === "/about"
                      ? "border-b-2 border-red-500"
                      : ""
                  }`}
                >
                  {langName === "eng"
                    ? textContent.eng.fourth_route
                    : textContent.cro.fourth_route}
                  {location.pathname !== "/about" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
                <Link
                  to="/contact"
                  className={`hover:text-red-500 font-medium relative group ${
                    location.pathname === "/contact"
                      ? "border-b-2 border-red-500"
                      : ""
                  }`}
                >
                  {langName === "eng"
                    ? textContent.eng.fifth_route
                    : textContent.cro.fifth_route}
                  {location.pathname !== "/contact" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
              </div>
            </div>
            {/* Secondary menu */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* Toggle for Lang Mode */}
              <div className="flex items-center">
                <select
                  value={isLangEng ? "ENG" : "CRO"}
                  onChange={(e) => {
                    const newLang = e.target.value === "ENG";
                    localStorage.setItem("lang", JSON.stringify(newLang));
                    chooseLang(newLang);
                    setCssLang(newLang ? "eng" : "cro");
                  }}
                  className={`theme-${className}-main theme-${className}-text relative inline-flex items-center cursor-pointer rounded-lg`}
                >
                  <option className={`text-center`} value="CRO">
                    CRO
                  </option>
                  <option className={`text-center`}>ENG</option>
                </select>
                {/* Toggle for Light/Dark Mode */}
                <label
                  id="toggleMode"
                  className="relative inline-flex items-center cursor-pointer ml-2"
                >
                  {isLightTheme ? (
                    <TbSunHigh
                      className="text-yellow-500 hover:text-yellow-600 hover:scale-105 transition duration-300 ease-in-out"
                      size={25}
                      onClick={() => {
                        localStorage.setItem("theme", JSON.stringify(false));
                        chooseTheme(false);
                        setCssTheme("dark");
                      }}
                    />
                  ) : (
                    <IoMoonSharp
                      size={25}
                      className="hover:text-blue-400 hover:scale-105 transition duration-300 ease-in-out"
                      onClick={() => {
                        localStorage.setItem("theme", JSON.stringify(true));
                        chooseTheme(true);
                        setCssTheme("light");
                      }}
                    />
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          } ${className === "dark" ? "bg-[#222222]" : "bg-gray-100"}`}
        >
          <div
            className={`px-8 theme-${className}-main theme-${className}-text`}
          >
            <div className="flex flex-col gap-8 font-bold">
              <Link
                to="/"
                className="hover:hover:text-red-500"
                onClick={handleLinkClick}
              >
                {" "}
                {langName === "eng"
                  ? textContent.eng.first_route
                  : textContent.cro.first_route}
              </Link>
              <Link
                to="/products"
                className="hover:hover:text-red-500"
                onClick={handleLinkClick}
              >
                {langName === "eng"
                  ? textContent.eng.second_route
                  : textContent.cro.second_route}
              </Link>
              <Link
                to="/gallery"
                className="hover:hover:text-red-500"
                onClick={handleLinkClick}
              >
                {langName === "eng"
                  ? textContent.eng.third_route
                  : textContent.cro.third_route}
              </Link>
              <Link
                to="/about"
                className="hover:hover:text-red-500"
                onClick={handleLinkClick}
              >
                {langName === "eng"
                  ? textContent.eng.fourth_route
                  : textContent.cro.fourth_route}
              </Link>
              <Link
                to="/contact"
                className="hover:hover:text-red-500"
                onClick={handleLinkClick}
              >
                {langName === "eng"
                  ? textContent.eng.fifth_route
                  : textContent.cro.fifth_route}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
