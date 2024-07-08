import NavLinks from "./NavLinks";
import { NavProps } from "../../types/NavProps";

export default function Navbar({ showNav, setShowNav, toggleBtn }: NavProps) {
  return (
    <section className="nav-container">
      <NavLinks
        showNav={showNav}
        toggleBtn={toggleBtn}
        setShowNav={setShowNav}
      />
    </section>
  );
}
