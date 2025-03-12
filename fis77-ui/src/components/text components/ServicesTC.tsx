interface ServicesTC {
  main_title: string;
  description: string;
  product_title: {
    product_v1: string;
    product_v2: string;
    product_v3: string;
    product_v4: string;
    product_v5: string;
    product_v6: string;
  };
  product_description: {
    product_v1: string;
    product_v2: string;
    product_v3: string;
    product_v4: string;
    product_v5: string;
    product_v6: string;
  };
}

export const textContent: { [key: string]: ServicesTC } = {
  cro: {
    main_title: "Naše usluge",
    description:
      "Zabilježite svoje posebne trenutke s našim profesionalnim fotografskim uslugama.",
    product_title: {
      product_v1: "Portretne Sesije",
      product_v2: "Obiteljske Fotografije",
      product_v3: "Portreti Glave",
      product_v4: "Fotografiranje Događaja",
      product_v5: "Fotografiranje Proizvoda",
      product_v6: "Fotografiranje interijera i eksterijera",
    },
    product_description: {
      product_v1:
        "Zabilježite bezvremenske portrete pojedinaca, parova ili obitelji.",
      product_v2:
        "Sačuvajte obiteljske uspomene s prekrasnim grupnim portretima.",
      product_v3:
        "Profesionalni portreti glave za vaše poslovanje ili osobni brend.",
      product_v4:
        "Zabilježite posebne trenutke vaših događanja, vjenčanja ili zabava.",
      product_v5:
        "Visokokvalitetne fotografije proizvoda za vašu online trgovinu ili portfolio.",
      product_v6: "Prikažite ljepotu prostora, iznutra i izvana.",
    },
  },
  eng: {
    main_title: "Our services",
    description:
      "Capture your special moments with our professional photography services.",
    product_title: {
      product_v1: "Portrait Sessions",
      product_v2: "Family Photos",
      product_v3: "Headshots",
      product_v4: "Event Photography",
      product_v5: "Product Photography",
      product_v6: "Interior and exterior photography",
    },
    product_description: {
      product_v1:
        "Capture timeless portraits of individuals, couples, or families.",
      product_v2:
        "Preserve your family's memories with beautiful group portraits.",
      product_v3: "Professional headshots for your business or personal brand.",
      product_v4:
        "Capture the special moments of your events, weddings, or parties.",
      product_v5:
        "High-quality product photography for your online store or portfolio.",
      product_v6: "Showcase the beauty of the space, inside and out.",
    },
  },
};
