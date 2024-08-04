import React from "react";
import ContactForm from "../../components/contact/ContactForm";
import ContactDetails from "../../components/contact/ContactDetails";
import SocialMediaLinks from "../../components/contact/SocialMediaLinks";
import FQA from "../../components/contact/FQA";

const Contact: React.FC = () => {
  return (
    <section className="container contact">
      <ContactForm />
      <ContactDetails />
      <SocialMediaLinks />
      <FQA />
    </section>
  );
};

export default Contact;
