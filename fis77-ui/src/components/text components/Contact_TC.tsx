interface Footer_TC {
  title: string;
  successfullMsg: string;
  errorMsg: string;
  timeRemaining: string;
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
    successfullMsg: "Vaša poruka je uspješno poslana.",
    errorMsg:
      "Ups! Trenutno ne možemo poslati vaš email. Molimo pokušajte ponovno kasnije.",
    timeRemaining: "sekundi preostalo",
    section_form: {
      name: "Vaše Ime i Prezime:",
      email: "Vaša e-mail adresa:",
      text: "Vaša poruka:",
      btn: "Pošalji",
    },
    section_info: {
      miniTitle: "Kontakt informacije",
      email: "Email: fotostudioivan77@gmail.com",
      phone: "Telefon: 098 906 6722",
      workingHours: "Radni dani: Pon-Pet, 08:00 - 16:00",
    },
  },
  eng: {
    title: "Contact Us",
    successfullMsg: "Your message was sent successfully",
    errorMsg:
      "Oops! We couldn't send your email right now. Please try again later.",
    timeRemaining: "seconds remaining",
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
