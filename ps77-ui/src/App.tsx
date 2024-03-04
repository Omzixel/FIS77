import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

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

  return (
    <>
      <Navbar
        chooseTheme={chooseTheme}
        isLightTheme={isLightTheme}
        setCssTheme={setCssTheme}
        className={className}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
