import { FC, useState, useEffect } from "react";
import Modal from "react-modal";
import { textContent } from "@/components/text components/Gallery_TC";

import imgOne from "../images/imgGallery1.jpg";
import imgTwo from "../images/imgGallery2.jpg";
import imgThree from "../images/imgGallery3.jpg";
import imgFour from "../images/imgGallery4.jpg";
import imgFive from "../images/imgGallery5.jpg";
import imgSix from "../images/imgGallery6.jpg";
import imgSeven from "../images/imgGallery7.jpg";
import imgEight from "../images/imgGallery8.jpg";
import imgNine from "../images/imgGallery9.jpg";

interface IProps {
  className: string;
  langName: string;
}

const Gallery: FC<IProps> = ({ className, langName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const images = [
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    imgSix,
    imgSeven,
    imgEight,
    imgNine,
  ];

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  const navigate = (direction: "prev" | "next") => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        if (direction === "prev") {
          return prevIndex === 0 ? images.length - 1 : prevIndex! - 1;
        } else {
          return prevIndex === images.length - 1 ? 0 : prevIndex! + 1;
        }
      });
    }
  };

  return (
    <div className={`theme-${className}-text theme-${className}-main mx-auto`}>
      <div className="flex flex-wrap justify-center gap-5 py-2 p-12">
        {images.map((image, index) => (
          <div key={index} className="w-1/4">
            <img
              src={image}
              className="w-full cursor-pointer hover:scale-105 transition duration-300 ease-out"
              alt={`Image ${index + 1}`}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        className="modal"
        contentLabel="Gallery Modal"
      >
        {selectedImageIndex !== null && (
          <>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded"
            >
              {langName === "eng"
                ? textContent.eng.btn_previous
                : textContent.cro.btn_previous}
            </button>
            <img
              src={images[selectedImageIndex]}
              className="max-h-screen max-w-screen mx-auto"
              alt={`Image ${selectedImageIndex + 1}`}
            />
            <button
              onClick={() => navigate("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded"
            >
              {langName === "eng"
                ? textContent.eng.btn_next
                : textContent.cro.btn_next}
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
