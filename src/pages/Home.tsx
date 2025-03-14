import { textContent } from "@/components/text components/HomeTC";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { FC, useEffect, useState } from "react";

import photoIcon from "../images/photoIcon.svg";
import videoIcon from "../images/videoIcon.svg";

interface IProps {
  className: string;
  langName: string;
}

const Home: FC<IProps> = ({ className, langName }) => {
  const [images, setImages] = useState<string[]>([]);
  const [realEstateImages, setRealEstateImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = [
          "https://anjix3.sirv.com/Images/imgCarousel1.jpg",
          "https://anjix3.sirv.com/Images/imgCarousel2.jpg",
          "https://anjix3.sirv.com/Images/imgCarousel3.jpg",
          "https://anjix3.sirv.com/Images/imgCarousel4.jpg",
        ];
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchRealEstateImages = async () => {
      try {
        const imageRealEstateUrls = [
          "https://anjix3.sirv.com/Images/realEstate1.JPG",
          "https://anjix3.sirv.com/Images/realEstate2.JPG",
          "https://anjix3.sirv.com/Images/realEstate3.JPG",
          "https://anjix3.sirv.com/Images/realEstate4.JPG",
        ];
        setRealEstateImages(imageRealEstateUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
    fetchRealEstateImages();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const plugin2 = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <div className={`theme-${className}-text theme-${className}-main`}>
      <section
        className="bg-cover h-96"
        style={{
          backgroundImage: 'url("https://anjix3.sirv.com/Images/home.jpg")',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8 pt-5">
            {langName === "eng"
              ? textContent.eng.bg_main_text
              : textContent.cro.bg_main_text}
          </h1>

          <div className="text-white w-1/3 mx-auto flex">
            <span>
              {langName === "eng"
                ? textContent.eng.bg_img_text
                : textContent.cro.bg_img_text}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 gap-8">
        <article
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            {langName === "eng"
              ? textContent.eng.section1.title
              : textContent.cro.section1.title}
          </h2>
          <p className="text-lg">
            {langName === "eng"
              ? textContent.eng.section1.text
              : textContent.cro.section1.text}
          </p>
        </article>

        <section
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
          aria-labelledby="photo-section"
        >
          <h3 id="photo-section" className="text-2xl font-semibold mb-4 flex">
            <img className="w-10 mr-3" src={photoIcon} alt="Frame icon" />
            {langName === "eng"
              ? textContent.eng.section2.title
              : textContent.cro.section2.title}
          </h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>
                {langName === "eng"
                  ? textContent.eng.section2.subTitle1
                  : textContent.cro.section2.subTitle1}
              </strong>{" "}
              {langName === "eng"
                ? textContent.eng.section2.text_portrait
                : textContent.cro.section2.text_portrait}
            </li>
            <li className="mb-4">
              <strong>
                {langName === "eng"
                  ? textContent.eng.section2.subTitle2
                  : textContent.cro.section2.subTitle2}
              </strong>{" "}
              {langName === "eng"
                ? textContent.eng.section2.text_events
                : textContent.cro.section2.text_events}
            </li>
            <li>
              <strong>
                {langName === "eng"
                  ? textContent.eng.section2.subTitle3
                  : textContent.cro.section2.subTitle3}
              </strong>{" "}
              {langName === "eng"
                ? textContent.eng.section2.text_products
                : textContent.cro.section2.text_products}
            </li>
          </ul>

          <Carousel plugins={[plugin.current]}>
            <CarouselContent>
              {images.map((imageUrl, index) => (
                <CarouselItem key={imageUrl}>
                  <img
                    src={imageUrl}
                    alt={`Photo gallery image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Carousel plugins={[plugin2.current]} className="mt-10">
            <CarouselContent>
              {realEstateImages.map((realEstateImageUrl, index) => (
                <CarouselItem key={realEstateImageUrl}>
                  <img
                    src={realEstateImageUrl}
                    alt={`Photo gallery image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
          aria-labelledby="video-section"
        >
          <h3 id="video-section" className="text-2xl font-semibold mb-4 flex">
            <img className="w-8 mr-3" src={videoIcon} alt="Video icon" />
            {langName === "eng"
              ? textContent.eng.section3.title
              : textContent.cro.section3.title}
          </h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>
                {langName === "eng"
                  ? textContent.eng.section3.subTitle1
                  : textContent.cro.section3.subTitle1}
              </strong>{" "}
              {langName === "eng"
                ? textContent.eng.section3.text_commercial
                : textContent.cro.section3.text_commercial}
            </li>
            <li className="mb-4">
              <strong>
                {langName === "eng"
                  ? textContent.eng.section3.subTitle2
                  : textContent.cro.section3.subTitle2}
              </strong>{" "}
              {langName === "eng"
                ? textContent.eng.section3.text_events
                : textContent.cro.section3.text_events}
            </li>
            <li>
              <strong>
                {langName === "eng"
                  ? textContent.eng.section3.subTitle3
                  : textContent.cro.section3.subTitle3}
              </strong>{" "}
              {langName === "eng"
                ? textContent.eng.section3.text_music
                : textContent.cro.section3.text_music}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
