interface ProductsTC {
  main_title: string;
  product: {
    product_name: string;
    product_dimension: string;
    product_price: string;
  };
}

export const textContent: { [key: string]: ProductsTC } = {
  cro: {
    main_title: "IZRADA FOTOGRAFIJE",
    product: {
      product_name: "Izrada fotografije",
      product_dimension: "Dimenzija",
      product_price: "Cijena",
    },
  },
  eng: {
    main_title: "CREATION OF A PHOTO",
    product: {
      product_name: "Creation of a photo",
      product_dimension: "Dimension",
      product_price: "Price",
    },
  },
};
