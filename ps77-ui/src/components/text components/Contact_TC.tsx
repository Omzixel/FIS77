interface Footer_TC {
  title: string;
  section_form: {
    name: string;
    email: string;
    text: string;
    btn: string;
  };
  section_info: {
    miniTitle: string;
    email: string;
    phone: string;
    workingHours: string;
  };
}

export const textContent: { [key: string]: Footer_TC } = {
  cro: {
    title: "Kontaktriaj nas",
    section_form: {
      name: "Vaše Ime i Prezime:",
      email: "Vaša e-mail adresa:",
      text: "Vaša poruka:",
      btn: "Pošalji",
    },
    section_info: {
      miniTitle: "Kontakt informacije",
      email: "Email: mail@gmail.com",
      phone: "Telefon: 123 456 7890",
      workingHours: "Radni dani: Pon-Pet, 08:00 - 16:00",
    },
  },
  eng: {
    title: "Contact Us",
    section_form: {
      name: "Your Name and Surname:",
      email: "Your Email Address:",
      text: "Your Message:",
      btn: "Send",
    },
    section_info: {
      miniTitle: "Contact Information",
      email: "Email: mail@gmail.com",
      phone: "Phone: 123 456 7890",
      workingHours: "Working Hours: Mon-Fri, 08:00 - 16:00",
    },
  },
};
