import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function FooterLinks() {
  return (
    <>
      <ul id="footer_links">
        <li>
          <a href="www.facebook.com">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="www.instagram.com">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </>
  );
}
