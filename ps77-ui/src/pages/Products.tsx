import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Products: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=5"
        );
        const data = await response.json();
        const imageUrls = data.map(
          (item: { download_url: string }) => item.download_url
        );
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Product Page</h1>
        <Carousel className="w-2/3">
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
    </section>
  );
};

export default Products;
