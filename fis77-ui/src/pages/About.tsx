import { FC } from "react";
import { textContent } from "@/components/text components/About_TC";

interface IProps {
  className: string;
  langName: string;
}

const About: FC<IProps> = ({ className, langName }) => {
  return (
    <div className={`theme-${className}-text theme-${className}-main`}>
      <section
        className="bg-cover h-96"
        style={{
          backgroundImage: 'url("https://anjix3.sirv.com/Images/aboutBg.jpg")',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white h-24 pt-10">
            Foto Ivan Studio 77
          </h1>
        </div>
      </section>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <img
            className="rounded-lg w-full"
            src="https://static.showit.co/800/fJYakwDdRxab52BqxsYEvw/57329/wedding_photographer_bristol_-_gavin_jacob_power.jpg"
            alt="413979415-856362963159825-8024410639689083445-n"
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <h1 className="text-4xl font-bold mb-5 mt-5 ml-7">
            {langName === "eng" ? textContent.eng.title : textContent.cro.title}
          </h1>
          <div className=" p-8">
            <p className="mb-4">
              {langName === "eng"
                ? textContent.eng.section1
                : textContent.cro.section1}
            </p>
            <p className="mb-4">
              {langName === "eng"
                ? textContent.eng.section2
                : textContent.cro.section2}
            </p>
            <p className="mb-4">
              {langName === "eng"
                ? textContent.eng.section3
                : textContent.cro.section3}
            </p>
            <p className="mb-4">
              {langName === "eng"
                ? textContent.eng.section4
                : textContent.cro.section4}
            </p>
            <p>
              {langName === "eng"
                ? textContent.eng.section5
                : textContent.cro.section5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
