interface Home_TC {
  bg_main_text: string;
  bg_img_text: string;
  section1: {
    title: string;
    text: string;
  };
  section2: {
    title: string;
    subTitle1: string;
    subTitle2: string;
    subTitle3: string;
    text_portrait: string;
    text_events: string;
    text_products: string;
  };
  section3: {
    title: string;
    subTitle1: string;
    subTitle2: string;
    subTitle3: string;
    text_commercial: string;
    text_events: string;
    text_music: string;
  };
}

export const textContent: { [key: string]: Home_TC } = {
  cro: {
    bg_main_text: "Dobrodošli u Foto Ivan Studio 77",
    bg_img_text: "Uzbuđenje trenutka, snaga emocija i beskonačna kreativnost",
    section1: {
      title: "Što nudimo?",
      text: "Foto Ivan Studio 77 nudi vrhunske usluge u fotografiji i videografiji, prilagođene širokom spektru potreba i želja. Naše stručnosti i predanost osiguravaju da svaki projekt bude obrađen s pažnjom i kreativnošću koje su nam inherentne.",
    },
    section2: {
      title: "Fotografija",
      subTitle1: "Portreti: ",
      subTitle2: "Događaji: ",
      subTitle3: "Proizvodi: ",
      text_portrait:
        "Snimanje trenutaka posebnih emocija pomoću narativnih portreta.",
      text_events:
        "Dokumentiranje važnih trenutaka od vjenčanja do korporativnih sastanaka s pažnjom na detalje.",
      text_products:
        "Predstavljanje vaših proizvoda na način koji privlači pažnju, produbljujući povezanost s vašim kupcima.",
    },
    section3: {
      title: "Videografija",
      subTitle1: "Komercijalni videozapis: ",
      subTitle2: "Događaji: ",
      subTitle3: "Glazebni videozapisi: ",
      text_commercial:
        "Oblikovanje dinamičnih videozapisa koji jedinstveno i privlačno predstavljaju vaš brand.",
      text_events:
        "Snimanje i uređivanje videozapisa koji hvataju atmosferu i bit vaših događaja.",
      text_music:
        "Pružanje kreativnih vizualnih interpretacija glazbe, ističući umjetnički izraz i estetiku.",
    },
  },
  eng: {
    bg_main_text: "Welcome to Foto Ivan Studio 77",
    bg_img_text:
      "The excitement of the moment, the power of emotions and infinite creativity",
    section1: {
      title: "What We Offer?",
      text: "Foto Ivan Studio 77 offers top quality photography and video services, adapted to a wide range of needs and desires. Our expertise and dedication ensures that each project is handled with care and creativity inherent in us.",
    },
    section2: {
      title: "Photography",
      subTitle1: "Portraits: ",
      subTitle2: "Events: ",
      subTitle3: "Products: ",
      text_portrait:
        "Capturing moments of special emotions using narrative portraits.",
      text_events:
        "Documenting important moments from weddings to corporate meetings with attention to detail.",
      text_products:
        "Presenting your products in an eye-catching way, deepening the connection with your customers.",
    },
    section3: {
      title: "Videografija",
      subTitle1: "Commercial Videos: ",
      subTitle2: "Events: ",
      subTitle3: "Music Videos: ",
      text_commercial:
        "Creating dynamic videos that uniquely and attractively represent your brand.",
      text_events:
        "Capture and edit videos that capture the atmosphere and essence of your events.",
      text_music:
        "Providing creative visual interpretations of music, emphasizing artistic expression and aesthetics.",
    },
  },
};
