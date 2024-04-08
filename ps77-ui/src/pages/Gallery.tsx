import { FC, useState, useEffect } from "react";
import Modal from "react-modal";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

interface IProps {
  className: string;
}

const Gallery: FC<IProps> = ({ className }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const images = [img1, img2];

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
          return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        } else {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        }
      });
    }
  };

  return (
    <div
      className={`flex mx-auto gap-5 justify-center py-2 pb-96 ${className}`}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="w-1/4 cursor-pointer hover:scale-105 transition duration-300 ease-out"
          alt={`Image ${index + 1}`}
          onClick={() => openModal(index)}
        />
      ))}

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
              Previous
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
              Next
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
