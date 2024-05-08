interface Footer_TC {
  btn_next: string;
  btn_previous: string;
}

export const textContent: { [key: string]: Footer_TC } = {
  cro: {
    btn_next: "Sljedeća",
    btn_previous: "Prethodna",
  },
  eng: {
    btn_next: "Next",
    btn_previous: "Previous",
  },
};
