interface GalleryTC {
  btn_next: string;
  btn_previous: string;
  btn_wedding: string;
  btn_realEstate: string;
}

export const textContent: { [key: string]: GalleryTC } = {
  cro: {
    btn_next: "Sljedeća",
    btn_previous: "Prethodna",
    btn_wedding: "Vjenčanja",
    btn_realEstate: "Nekretnine",
  },
  eng: {
    btn_next: "Next",
    btn_previous: "Previous",
    btn_wedding: "Wedding gallery",
    btn_realEstate: "Real estate gallery",
  },
};
