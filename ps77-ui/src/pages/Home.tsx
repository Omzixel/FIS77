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
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 gap-8">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
          <p className="text-lg">
            Photo Studio 77 offers top-notch services in photography and
            videography, catering to a wide range of needs and desires. Our
            expertise and dedication ensure that each project is handled with
            the care and creativity that are inherent to us.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Photography</h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>Portraits:</strong> Capturing moments of special emotions
              with storytelling portraits.
            </li>
            <li className="mb-4">
              <strong>Events:</strong> Documenting important moments from
              weddings to corporate meetings with attention to detail.
            </li>
            <li>
              <strong>Products:</strong> Showcasing your products in an
              attention-grabbing way, deepening the connection with your
              customers.
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

        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Videography</h3>
          <ul className="text-lg">
            <li className="mb-4">
              <strong>Commercial Videos:</strong> Crafting dynamic videos that
              represent your brand uniquely and attractively.
            </li>
            <li className="mb-4">
              <strong>Events:</strong> Shooting and editing videos capturing the
              atmosphere and essence of your events.
            </li>
            <li>
              <strong>Music Videos:</strong> Providing creative visual
              interpretations of music, highlighting artistic expression and
              aesthetics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
