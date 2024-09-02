import { textContent } from "@/components/text components/ProductsTC";
import { LuPaintbrush } from "react-icons/lu";
import { FC } from "react";

interface IProps {
  className: string;
  langName: string;
}

const Services: FC<IProps> = ({ className, langName }) => {
  return (
    <div className={`theme-${className}-text theme-${className}-main pb-5`}>
      <section id="menu" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Capture your special moments with our professional photography
                services.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background rounded-lg shadow-lg p-6">
              {" "}
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">Portrait Sessions</h3>
              <p className="text-muted-foreground">
                Capture timeless portraits of individuals, couples, or families.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">Family Photos</h3>
              <p className="text-muted-foreground">
                Preserve your family's memories with beautiful group portraits.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">Headshots</h3>
              <p className="text-muted-foreground">
                Professional headshots for your business or personal brand.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">Event Photography</h3>
              <p className="text-muted-foreground">
                Capture the special moments of your events, weddings, or
                parties.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">Product Photography</h3>
              <p className="text-muted-foreground">
                High-quality product photography for your online store or
                portfolio.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6">
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">Landscape Photography</h3>
              <p className="text-muted-foreground">
                Capture the beauty of nature and the great outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
