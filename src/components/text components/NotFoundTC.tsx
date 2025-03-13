interface NotFoundTc {
  title: string;
  message: string;
  button: string;
}

export const textContent: { [key: string]: NotFoundTc } = {
  cro: {
    title: "Ups, stranica nije pronađena!",
    message:
      "Stranica koju tražite izgleda ne postoji. Provjerite URL ili se pokušajte vratiti na početnu stranicu.",
    button: "Idi na početnu stranicu",
  },
  eng: {
    title: "Oops, page not found!",
    message:
      "The page you're looking for doesn't seem to exist. Please check the URL or try navigating back to the homepage.",
    button: "Go to home page",
  },
};
