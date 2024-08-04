import React from "react";
import ContactForm from "../../components/contact/ContactForm";
import ContactDetails from "../../components/contact/ContactDetails";
import SocialMediaLinks from "../../components/contact/SocialMediaLinks";

const Contact: React.FC = () => {
  return (
    <section className="container contact">
      <ContactForm />
      <ContactDetails />
      <SocialMediaLinks />
    </section>
  );
};

export default Contact;
