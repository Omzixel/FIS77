const About = () => {
  return (
    <section className="py-16 bg-blue-100 flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <img
            className="rounded-lg w-full"
            src="https://i.ibb.co/6NDwF7d/413979415-856362963159825-8024410639689083445-n.jpg"
            alt="413979415-856362963159825-8024410639689083445-n"
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <h1 className="text-4xl font-bold mb-8">O nama</h1>
          <div className="text-gray-700 p-8">
            <p className="mb-4">
              Dobrodošli u <span className="font-bold">Photo Studio 77</span> -
              mjesto gdje se ostvaruju savršenstvo!
            </p>
            <p className="mb-4">
              Naša priča započinje s strašću prema fotografiji i videografiji,
              te ljubavlju prema stvaranju savršenih vizualnih doživljaja.
              <span className="font-bold">Photo Studio 77</span> je obiteljska
              tvrtka posvećena stvaranju izvanrednih fotografija i videozapisa
              koji će zabilježiti najvažnije trenutke u vašem životu.
            </p>
            <p className="mb-4">
              Kroz pažljiv odabir najkvalitetnije opreme i neprekidno
              usavršavanje naših fotografa i snimatelja, svakodnevno stvaramo
              čaroliju koja će oživjeti vaše najdragocjenije uspomene i pružiti
              vam nezaboravno iskustvo uživanja u vizualnim umjetnostima.
              Posebnu pažnju posvećujemo detaljima i estetici, kako bismo svaki
              kadar ili snimku pretvorili u pravo malo umjetničko djelo.
            </p>
            <p className="mb-4">
              Bez obzira trebate li fotografije za posebnu prigodu, poput
              vjenčanja ili rođendana, profesionalne portrete ili snimke za
              promociju vašeg poslovanja, ili jednostavno želite zabilježiti
              trenutke s obitelji i prijateljima,{" "}
              <span className="font-bold">Photo Studio 77</span> je tu da ispuni
              vaše najslađe želje.
            </p>
            <p>
              Radujemo se što ćemo vas povesti na put vizualnog užitka i
              dijeliti s vama radost stvaranja nezaboravnih fotografija i
              videozapisa. Hvala vam što ste dio{" "}
              <span className="font-bold">Vizualnih Uspomena</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
