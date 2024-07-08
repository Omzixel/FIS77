import React, { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

interface ScrollToTopScrollToTopButtonProps {
  className: string;
}

const ScrollToTopButton: React.FC<ScrollToTopScrollToTopButtonProps> = ({
  className,
}) => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <BsArrowUpSquareFill
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 rounded-md duration-300 cursor-pointer ${
            className === "light" ? "border bg-white" : ""
          }`}
          size={35}
        />
      )}
    </>
  );
};

export default ScrollToTopButton;
