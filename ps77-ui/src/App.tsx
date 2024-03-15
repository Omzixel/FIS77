import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(
    /true/.test(String(localStorage.getItem("theme")))
  );
  const [className, setclassName] = useState<string>(
    /true/.test(String(localStorage.getItem("theme"))) ? "light" : "dark"
  );
  const chooseTheme = (isLightTheme: boolean) => {
    setIsLightTheme(isLightTheme);
  };

  const setCssTheme = (className: string) => {
    setclassName(className);
  };

  const [isLangEng, setIsLangEng] = useState<boolean>(
    /true/.test(String(localStorage.getItem("lang")))
  );
  const [langName, setLangName] = useState<string>(
    /true/.test(String(localStorage.getItem("lang"))) ? "eng" : "cro"
  );
  const chooseLang = (isLangEng: boolean) => {
    setIsLangEng(isLangEng);
  };

  const setCssLang = (langName: string) => {
    setLangName(langName);
  };

  return (
    <>
      <Navbar
        chooseTheme={chooseTheme}
        isLightTheme={isLightTheme}
        setCssTheme={setCssTheme}
        className={className}
        chooseLang={chooseLang}
        isLangEng={isLangEng}
        setCssLang={setCssLang}
        langName={langName}
      />

      <Routes>
        <Route
          path="/"
          element={<Home className={className} langName={langName} />}
        />
        <Route path="/products" element={<Products className={className} />} />
        <Route path="/gallery" element={<Gallery className={className} />} />
        <Route path="/about" element={<About className={className} />} />
        <Route path="/contact" element={<Contact className={className} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
