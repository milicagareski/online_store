import ContactForm from "../../components/contact/ContactForm";
import ContactDetails from "../../components/contact/ContactDetails";
import SocialMediaLinks from "../../components/contact/SocialMediaLinks";
import FAQ from "../../components/contact/FAQ";
const Contact = () => {
  return (
    <section className="container contact">
      <ContactForm />
      <ContactDetails />
      <SocialMediaLinks />
      <FAQ />
    </section>
  );
};

export default Contact;
