import React, { FC, useState } from "react";
import Modal from "react-modal";

interface IProps {
  className: string;
}

const Gallery: FC<IProps> = ({ className }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const images = ["../../public/img1.jpg", "../../public/img2.jpg"]; // Add more image URLs here

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
        if (prevIndex === null) return null;
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
      className={`theme-${className}-text theme-${className}-main flex mx-auto gap-5 justify-center my-2`}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="w-1/4"
          onClick={() => openModal(index)}
        />
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        {selectedImageIndex !== null && (
          <div className="my-[10%] flex justify-center">
            <button onClick={() => navigate("prev")}>Previous</button>
            <img src={images[selectedImageIndex]} className="w-1/3" />
            <button onClick={() => navigate("next")}>Next</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
