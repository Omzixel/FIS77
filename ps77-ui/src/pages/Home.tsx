import React, { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IProps {
  className: string;
  langName: string;
}

const Home: FC<IProps> = ({ className, langName }) => {
  const [images, setImages] = useState<string[]>([]);

  const textContent = {
    cro: {
      bg_img_text: "Uzbuđenje trenutka, snaga emocija i beskonačna kreativnost",
      section1: {
        title: "Što nudimo?",
        text: "Photo Studio 77 nudi vrhunske usluge u fotografiji i videografiji, prilagođene širokom spektru potreba i želja. Naše stručnosti i predanost osiguravaju da svaki projekt bude obrađen s pažnjom i kreativnošću koje su nam inherentne.",
      },
      section2: {
        title: "Fotografija",
        text_portrait:
          "Snimanje trenutaka posebnih emocija pomoću narativnih portreta.",
        text_events:
          "Dokumentiranje važnih trenutaka od vjenčanja do korporativnih sastanaka s pažnjom na detalje.",
        text_products:
          "Predstavljanje vaših proizvoda na način koji privlači pažnju, produbljujući povezanost s vašim kupcima.",
      },
      section3: {
        title: "Videografija",
        text_commercial:
          "Oblikovanje dinamičnih videozapisa koji jedinstveno i privlačno predstavljaju vaš brand.",
        text_events:
          "Snimanje i uređivanje videozapisa koji hvataju atmosferu i bit vaših događaja.",
        text_music:
          "Pružanje kreativnih vizualnih interpretacija glazbe, ističući umjetnički izraz i estetiku.",
      },
    },
    eng: {
      bg_img_text:
        "The excitement of the moment, the power of emotions and infinite creativity",
      section1: {
        title: "What We Offer?",
        text: "Photo studio 77 offers top quality photography and video services, adapted to a wide range of needs and desires. Our expertise and dedication ensures that each project is handled with care and creativity inherent in us.",
      },
      section2: {
        title: "Photography",
        text_portrait:
          "Capturing moments of special emotions using narrative portraits.",
        text_events:
          "Documenting important moments from weddings to corporate meetings with attention to detail.",
        text_products:
          "Presenting your products in an eye-catching way, deepening the connection with your customers.",
      },
      section3: {
        title: "Videografija",
        text_commercial:
          "Creating dynamic videos that uniquely and attractively represent your brand.",
        text_events:
          "Capture and edit videos that capture the atmosphere and essence of your events.",
        text_music:
          "Providing creative visual interpretations of music, emphasizing artistic expression and aesthetics.",
      },
    },
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = [
          "../../public/img1.jpg",
          "../../public/img2.jpg",
          "../../public/img3.jpg",
        ];
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
            Dobrodošli u Photo Studio 77
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
              ? textContent.eng.section2.title
              : textContent.cro.section2.title}
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
          <h3 className="text-2xl font-semibold mb-4">
            {langName === "eng"
              ? textContent.eng.section2.title
              : textContent.cro.section2.title}
          </h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>Portraits:</strong>{" "}
              {langName === "eng"
                ? textContent.eng.section2.text_portrait
                : textContent.cro.section2.text_portrait}
            </li>
            <li className="mb-4">
              <strong>Events:</strong>{" "}
              {langName === "eng"
                ? textContent.eng.section2.text_events
                : textContent.cro.section2.text_events}
            </li>
            <li>
              <strong>Products:</strong>{" "}
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
          <h3 className="text-2xl font-semibold mb-4">
            {langName === "eng"
              ? textContent.eng.section3.title
              : textContent.cro.section3.title}
          </h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>Commercial Videos:</strong>{" "}
              {langName === "eng"
                ? textContent.eng.section3.text_commercial
                : textContent.cro.section3.text_commercial}
            </li>
            <li className="mb-4">
              <strong>Events:</strong>{" "}
              {langName === "eng"
                ? textContent.eng.section3.text_events
                : textContent.cro.section3.text_events}
            </li>
            <li>
              <strong>Music Videos:</strong>{" "}
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
