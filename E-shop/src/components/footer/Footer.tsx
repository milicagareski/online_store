import FooterLinks from "./FooterLinks";
import FooterNews from "./FooterNews";
import FooterNavigation from "./FooterNavigation";
import FooterCR from "./FooterCR";
import { NavProps } from "../../types/NavProps";

export default function Footer({ showNav }: NavProps) {
  return (
    <section
      className={`footer-container ${
        showNav ? "non_fixed_footer" : "fixed_footer"
      }`}
    >
      <article id="footer_desktop">
        <FooterNews />
        <article id="footer_links_and_nav">
          <FooterLinks />
          <FooterNavigation />
        </article>
      </article>
      <FooterCR />
    </section>
  );
}
