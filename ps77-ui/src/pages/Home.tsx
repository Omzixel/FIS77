import React, { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { textContent } from "@/components/text components/Home_TC";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import photoIcon from "../images/photoIcon.svg";
import videoIcon from "../images/videoIcon.svg";

interface IProps {
  className: string;
  langName: string;
}

const Home: FC<IProps> = ({ className, langName }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = [`${img1}`, `${img2}`, `${img3}`];
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className={`theme-${className}-text theme-${className}-main`}>
      <section
        className="bg-cover h-96"
        style={{
          backgroundImage:
            'url("https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg")',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            {langName === "eng"
              ? textContent.eng.bg_main_text
              : textContent.cro.bg_main_text}
          </h1>

          <div className="text-white w-1/3 mx-auto flex">
            <hr className="w-1/6" />
            {langName === "eng"
              ? textContent.eng.bg_img_text
              : textContent.cro.bg_img_text}
            <hr className="w-1/6" />
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 gap-8">
        <div
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
        </div>

        <div
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
        >
          <h3 className="text-2xl font-semibold mb-4 flex">
            <img className="w-10 mr-3" src={photoIcon} />
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
                ? textContent.eng.section2.text_events
                : textContent.cro.section2.text_events}
            </li>
          </ul>
          <Carousel plugins={[plugin.current]}>
            <CarouselContent>
              {images.map((imageUrl, index) => (
                <CarouselItem key={index}>
                  <img
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className="w-full h-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
        >
          <h3 className="text-2xl font-semibold mb-4 flex">
            <img className="w-8 mr-3" src={videoIcon} />
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
                  ? textContent.eng.section3.subTitle1
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
        </div>
      </div>
    </div>
  );
};

export default Home;
