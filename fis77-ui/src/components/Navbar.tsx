import { textContent } from "@/components/text components/NavbarTC";
import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { DarkModeSwitch } from "react-toggle-dark-mode";

import logoImg from "../images/logo.jpg";
import logoImgInvert from "../images/logoInvert.jpg";

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
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <header className={`theme-${className}-main theme-${className}-text`}>
      <nav aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-5">
              {/* logo */}
              <a href="/" onClick={goToHomePage} aria-label="Home Page">
                <img
                  className="w-24 rounded-xl"
                  src={className === "light" ? logoImg : logoImgInvert}
                  alt="Company Logo"
                />
              </a>
              <div>
                <a className="flex gap-1 font-bold text-gray-700 items-center "></a>
              </div>
              {/* Primary Navigation */}
              <ul className="hidden lg:flex gap-8" role="menubar">
                <li role="none">
                  <Link
                    to="/"
                    role="menuitem"
                    className={`hover:text-red-500 font-medium relative group ${
                      location.pathname === "/"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {langName === "eng"
                      ? textContent.eng.first_route
                      : textContent.cro.first_route}
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/services"
                    role="menuitem"
                    className={`hover:text-red-500 font-medium relative group ${
                      location.pathname === "/services"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {langName === "eng"
                      ? textContent.eng.second_route
                      : textContent.cro.second_route}
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/gallery"
                    role="menuitem"
                    className={`hover:text-red-500 font-medium relative group ${
                      location.pathname === "/gallery"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {langName === "eng"
                      ? textContent.eng.third_route
                      : textContent.cro.third_route}
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/about"
                    role="menuitem"
                    className={`hover:text-red-500 font-medium relative group ${
                      location.pathname === "/about"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {langName === "eng"
                      ? textContent.eng.fourth_route
                      : textContent.cro.fourth_route}
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/contact"
                    role="menuitem"
                    className={`hover:text-red-500 font-medium relative group ${
                      location.pathname === "/contact"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {langName === "eng"
                      ? textContent.eng.fifth_route
                      : textContent.cro.fifth_route}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Secondary menu */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setToggleMenu(!toggleMenu)}
                  aria-label="Toggle Mobile Menu"
                >
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
              {/* Language and Theme Switch */}
              <div className="flex items-center">
                <label htmlFor="language-select" className="sr-only">
                  Select Language
                </label>
                <select
                  id="language-select"
                  value={isLangEng ? "ENG" : "CRO"}
                  onChange={(e) => {
                    const newLang = e.target.value === "ENG";
                    localStorage.setItem("lang", JSON.stringify(newLang));
                    chooseLang(newLang);
                    setCssLang(newLang ? "eng" : "cro");
                  }}
                  className={`theme-${className}-main theme-${className}-text relative inline-flex items-center cursor-pointer rounded-lg`}
                >
                  <option value="CRO">CRO</option>
                  <option>ENG</option>
                </select>
                {/* Toggle for Light/Dark Mode */}
                <label htmlFor="toggleMode" className="sr-only">
                  Toggle Theme
                </label>
                <DarkModeSwitch
                  className="ml-3"
                  id="toggleMode"
                  checked={!isLightTheme}
                  onChange={() => {
                    localStorage.setItem("theme", `"${!isLightTheme}"`);
                    chooseTheme(!isLightTheme);
                    setCssTheme(!isLightTheme ? "light" : "dark");
                  }}
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          } ${className === "dark" ? "bg-[#222222]" : "bg-gray-100"}`}
        >
          <div
            className={`px-8 theme-${className}-main theme-${className}-text`}
          >
            <ul className="flex flex-col gap-8 font-bold">
              <li role="none">
                <Link
                  to="/"
                  role="menuitem"
                  className="hover:text-red-500"
                  onClick={handleLinkClick}
                >
                  {langName === "eng"
                    ? textContent.eng.first_route
                    : textContent.cro.first_route}
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services"
                  role="menuitem"
                  className="hover:text-red-500"
                  onClick={handleLinkClick}
                >
                  {langName === "eng"
                    ? textContent.eng.second_route
                    : textContent.cro.second_route}
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/gallery"
                  role="menuitem"
                  className="hover:text-red-500"
                  onClick={handleLinkClick}
                >
                  {langName === "eng"
                    ? textContent.eng.third_route
                    : textContent.cro.third_route}
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/about"
                  role="menuitem"
                  className="hover:text-red-500"
                  onClick={handleLinkClick}
                >
                  {langName === "eng"
                    ? textContent.eng.fourth_route
                    : textContent.cro.fourth_route}
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/contact"
                  role="menuitem"
                  className="hover:text-red-500"
                  onClick={handleLinkClick}
                >
                  {langName === "eng"
                    ? textContent.eng.fifth_route
                    : textContent.cro.fifth_route}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
