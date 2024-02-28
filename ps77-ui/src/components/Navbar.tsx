import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
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
                <Link to="/" className="hover:text-red-500 font-medium">
                  POČETNA
                </Link>
                <Link to="/products" className="hover:text-red-500 font-medium">
                  PROIZVODI
                </Link>
                <Link to="/about" className="hover:text-red-500 font-medium">
                  O NAMA
                </Link>
                <Link to="/contact" className="hover:text-red-500 font-medium">
                  KONTAKT
                </Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2"></div>
                <div></div>
              </div>
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
            </div>
          </div>
        </div>
        {/* mobile navigation */}
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
              <Link to="/products" className="hover:hover:text-red-500">
                Proizvodi
              </Link>
              <Link to="/about" className="hover:hover:text-red-500">
                O nama
              </Link>
              <Link to="/contact" className="hover:hover:text-red-500">
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
