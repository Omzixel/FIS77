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
}

const Home: FC<IProps> = ({ className }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        // Instead of fetching, we'll use local images
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
            Uzbuđenje trenutka, snaga emocija i beskonačna kreativnost
            <hr className="w-1/6" />
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 gap-8">
        <div
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Što nudimo?</h2>
          <p className="text-lg">
            Photo Studio 77 nudi vrhunske usluge u fotografiji i videografiji,
            prilagođene širokom spektru potreba i želja. Naše stručnosti i
            predanost osiguravaju da svaki projekt bude obrađen s pažnjom i
            kreativnošću koje su nam inherentne.
          </p>
        </div>

        <div
          className={`theme-${className}-secondary rounded-lg shadow-lg p-6`}
        >
          <h3 className="text-2xl font-semibold mb-4">Fotografija</h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>Portreti:</strong> Snimanje trenutaka posebnih emocija
              pomoću narativnih portreta.
            </li>
            <li className="mb-4">
              <strong>Događaji:</strong> Dokumentiranje važnih trenutaka od
              vjenčanja do korporativnih sastanaka s pažnjom na detalje.
            </li>
            <li>
              <strong>Proizvodi:</strong> Predstavljanje vaših proizvoda na
              način koji privlači pažnju, produbljujući povezanost s vašim
              kupcima.
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
          <h3 className="text-2xl font-semibold mb-4">Videografija</h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>Komercijalni Videozapisi:</strong> Oblikovanje dinamičnih
              videozapisa koji jedinstveno i privlačno predstavljaju vaš brand.
            </li>
            <li className="mb-4">
              <strong>Događaji:</strong> Snimanje i uređivanje videozapisa koji
              hvataju atmosferu i bit vaših događaja.
            </li>
            <li>
              <strong>Glazbeni Videozapisi:</strong> Pružanje kreativnih
              vizualnih interpretacija glazbe, ističući umjetnički izraz i
              estetiku.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
