import { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";

interface IProps {
  chooseTheme: (isLightTheme: boolean) => void;
  isLightTheme: boolean;
  setCssTheme: (className: string) => void;
  className: string;
}

const Navbar: FC<IProps> = ({
  chooseTheme,
  isLightTheme,
  setCssTheme,
  className,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    console.log("ClassName: " + className);
  }, [className]);

  return (
    <div className={`theme-${className}-main`}>
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span>Photo Studio 77</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <Link
                  to="/"
                  className="hover:text-red-500 font-medium relative group"
                >
                  POČETNA
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/products"
                  className="hover:text-red-500 font-medium relative group"
                >
                  PROIZVODI
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/about"
                  className="hover:text-red-500 font-medium relative group"
                >
                  O NAMA
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-red-500 font-medium relative group"
                >
                  KONTAKT
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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
              {/* Toggle for Dark/Light Mode */}
              <div className="flex items-center">
                <label
                  id="toggleMode"
                  className="relative inline-flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isLightTheme}
                    onChange={(e) => {
                      const newTheme = !isLightTheme;
                      localStorage.setItem("theme", JSON.stringify(newTheme));
                      chooseTheme(newTheme);
                      setCssTheme(newTheme ? "light" : "dark");
                    }}
                    className="sr-only"
                  />
                  <div
                    title="Dark/Light Mode"
                    className={`w-14 h-7 bg-gray-300 rounded-full shadow-inner focus:outline-none relative dark:bg-gray-700 transition duration-300 ease-in-out`}
                  >
                    <div
                      className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
                        isLightTheme ? "translate-x-0" : "translate-x-7"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold">
              <Link to="/" className="hover:hover:text-red-500">
                Početna
              </Link>
              <Link to="/" className="hover:hover:text-red-500">
                Proizvodi
              </Link>
              <Link to="/" className="hover:hover:text-red-500">
                O nama
              </Link>
              <Link to="/" className="hover:hover:text-red-500">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
