interface NavbarTC {
  first_route: string;
  second_route: string;
  third_route: string;
  fourth_route: string;
  fifth_route: string;
}

export const textContent: { [key: string]: NavbarTC } = {
  cro: {
    first_route: "POČETNA",
    second_route: "PROIZVODI",
    third_route: "GALERIJA",
    fourth_route: "O NAMA",
    fifth_route: "KONTAKT",
  },
  eng: {
    first_route: "HOME",
    second_route: "PRODUCTS",
    third_route: "GALLERY",
    fourth_route: "ABOUT US",
    fifth_route: "CONTACT",
  },
};
