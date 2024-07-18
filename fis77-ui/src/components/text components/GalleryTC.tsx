interface GalleryTC {
  btn_next: string;
  btn_previous: string;
}

export const textContent: { [key: string]: GalleryTC } = {
  cro: {
    btn_next: "Sljedeća",
    btn_previous: "Prethodna",
  },
  eng: {
    btn_next: "Next",
    btn_previous: "Previous",
  },
};
