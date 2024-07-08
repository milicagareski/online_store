import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchSection() {
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <section id="search_section">
      <span>{element}</span>
      <input type="text" placeholder="SEARCH HERE" id="search" />
    </section>
  );
}
