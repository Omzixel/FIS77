import { textContent } from "@/components/text components/AboutTC";
import { FC } from "react";

interface IProps {
  className: string;
  langName: string;
}

const About: FC<IProps> = ({ className, langName }) => {
  return (
    <div className={`theme-${className}-text theme-${className}-main`}>
      <header
        className="bg-cover h-96"
        style={{
          backgroundImage: 'url("https://anjix3.sirv.com/Images/about.jpg")',
        }}
        aria-label="Hero section with studio name"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white h-24 pt-10">
            Foto Ivan Studio 77
          </h1>
        </div>
      </header>

      <main className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <article className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <img
            className="rounded-lg w-full"
            src="https://anjix3.sirv.com/Images/aboutMain.jpg"
            alt="A couple near the lake captured by Foto Ivan Studio 77"
          />
        </article>

        <section className="w-full md:w-1/2 pl-0 md:pl-8">
          <h2 className="text-4xl font-bold mb-5 mt-5 ml-7">
            {langName === "eng" ? textContent.eng.title : textContent.cro.title}
          </h2>

          <div className="p-8">
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
        </section>
      </main>
    </div>
  );
};

export default About;
