interface Products_TC {
  main_title: string;
  product1: {
    product_name: string;
    product_dimension: string;
    product_price: string;
  };
}

export const textContent: { [key: string]: Products_TC } = {
  cro: {
    main_title: "IZRADA FOTOGRAFIJE",
    product1: {
      product_name: "Izrada fotografije",
      product_dimension: "Dimenzija",
      product_price: "Cijena",
    },
  },
  eng: {
    main_title: "CREATION OF A PHOTO",
    product1: {
      product_name: "Creation of a photo",
      product_dimension: "Dimension",
      product_price: "Price",
    },
  },
};
