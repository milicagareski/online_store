import ContactForm from "../../components/contact/ContactForm";
import ContactDetails from "../../components/contact/ContactDetails";
import SocialMediaLinks from "../../components/contact/SocialMediaLinks";
import FAQ from "../../components/contact/FAQ";
import { useState } from "react";
const Contact = () => {
  const [contactInfo, setContactInfo] = useState(false);

  const displayContactDEtailsMsg = () => {
    let windowSize = window.innerWidth;
    if (windowSize >= 900) {
      setContactInfo(true);
    } else {
      setContactInfo(false);
    }
  };

  window.addEventListener("load", displayContactDEtailsMsg);
  window.addEventListener("resize", displayContactDEtailsMsg);

  return (
    <section className="container contact">
      <section className="container form_and_details">
        <ContactForm />
        <ContactDetails contactInfo={contactInfo} />
      </section>
      <section className="sm_and_faq">
        <SocialMediaLinks />
        <FAQ />
      </section>
    </section>
  );
};

export default Contact;
