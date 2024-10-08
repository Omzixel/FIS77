import { textContent } from "@/components/text components/ServicesTC";
import { LuPaintbrush } from "react-icons/lu";
import {
  MdOutlineHeadsetMic,
  MdEventAvailable,
  MdFamilyRestroom,
} from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

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
                {langName === "eng"
                  ? textContent.eng.main_title
                  : textContent.cro.main_title}
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {langName === "eng"
                  ? textContent.eng.description
                  : textContent.cro.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div
              className={`bg-background rounded-lg shadow-lg p-6 theme-${className}-container`}
            >
              {" "}
              <LuPaintbrush />
              <h3 className="text-xl font-bold mb-2">
                {langName === "eng"
                  ? textContent.eng.product_title.product_v1
                  : textContent.cro.product_title.product_v1}
              </h3>
              <p className="text-muted-foreground">
                {langName === "eng"
                  ? textContent.eng.product_description.product_v1
                  : textContent.cro.product_description.product_v1}
              </p>
            </div>
            <div
              className={`bg-background rounded-lg shadow-lg p-6 theme-${className}-container`}
            >
              <MdFamilyRestroom />
              <h3 className="text-xl font-bold mb-2">
                {langName === "eng"
                  ? textContent.eng.product_title.product_v2
                  : textContent.cro.product_title.product_v2}
              </h3>
              <p className="text-muted-foreground">
                {langName === "eng"
                  ? textContent.eng.product_description.product_v2
                  : textContent.cro.product_description.product_v2}
              </p>
            </div>
            <div
              className={`bg-background rounded-lg shadow-lg p-6 theme-${className}-container`}
            >
              <MdOutlineHeadsetMic />
              <h3 className="text-xl font-bold mb-2">
                {langName === "eng"
                  ? textContent.eng.product_title.product_v3
                  : textContent.cro.product_title.product_v3}
              </h3>
              <p className="text-muted-foreground">
                {langName === "eng"
                  ? textContent.eng.product_description.product_v3
                  : textContent.cro.product_description.product_v3}
              </p>
            </div>
            <div
              className={`bg-background rounded-lg shadow-lg p-6 theme-${className}-container`}
            >
              <MdEventAvailable />
              <h3 className="text-xl font-bold mb-2">
                {langName === "eng"
                  ? textContent.eng.product_title.product_v4
                  : textContent.cro.product_title.product_v4}
              </h3>
              <p className="text-muted-foreground">
                {langName === "eng"
                  ? textContent.eng.product_description.product_v4
                  : textContent.cro.product_description.product_v4}
              </p>
            </div>
            <div
              className={`bg-background rounded-lg shadow-lg p-6 theme-${className}-container`}
            >
              <GiCardboardBoxClosed />
              <h3 className="text-xl font-bold mb-2">
                {langName === "eng"
                  ? textContent.eng.product_title.product_v5
                  : textContent.cro.product_title.product_v5}
              </h3>
              <p className="text-muted-foreground">
                {langName === "eng"
                  ? textContent.eng.product_description.product_v5
                  : textContent.cro.product_description.product_v5}
              </p>
            </div>
            <div
              className={`bg-background rounded-lg shadow-lg p-6 theme-${className}-container`}
            >
              <HiOutlineBuildingLibrary />

              <h3 className="text-xl font-bold mb-2">
                {langName === "eng"
                  ? textContent.eng.product_title.product_v6
                  : textContent.cro.product_title.product_v6}
              </h3>
              <p className="text-muted-foreground">
                {langName === "eng"
                  ? textContent.eng.product_description.product_v6
                  : textContent.cro.product_description.product_v6}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
