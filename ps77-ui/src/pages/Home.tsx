import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home: React.FC = () => {
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
    <div className="">
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
      <div className="bg-gray-100 text-center">
        <p className="text-xl pt-5 font-bold">Što nudimo?</p>
        <div className="w-1/3 text-center bg-gray-200 mx-auto mt-5">
          Photo Studio 77 nudi vrhunske usluge izrade fotografija i videozapisa
          koje zadovoljavaju širok spektar potreba i želja. Naša stručnost i
          predanost osiguravaju da svaki projekt bude obrađen s pažnjom i
          kreativnošću koji su nam inherentni.
        </div>
        <div className="w-1/3 text-center bg-gray-200 mx-auto mt-5">
          <p className="text-lg font-semibold">Fotografije</p>
          Portreti: Izrađujemo portrete koji pričaju priče i zauvijek zadržavaju
          trenutke posebnih emocija.
          <br />
          Događaji: Snimamo važne trenutke vaših događaja, od vjenčanja do
          korporativnih sastanaka, bilježeći svaki detalj s pažnjom i
          preciznošću.
          <br />
          Proizvodi: Predstavljamo vaše proizvode na način koji privlači pažnju
          i produbljuje vezu s vašim kupcima.
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
        <div className="w-1/3 text-center bg-green-500 mx-auto mt-5">
          <p className="text-lg font-semibold">Videozapisi</p>
          Reklamni videozapisi: Kreiramo dinamične videozapise koji
          predstavljaju vašu marku na originalan i privlačan način.
          <br /> Događaji: Snimamo i uređujemo videozapise koji uhvataju
          atmosferu i suštinske trenutke vaših događaja.
          <br />
          Glazbeni spotovi: Pružamo kreativne vizualne interpretacije glazbe
          koje ističu umjetnički izričaj i estetiku.
        </div>
      </div>
    </div>
  );
};

export default Home;
