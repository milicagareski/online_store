import { SiNike, SiAdidas, SiReebok, SiAliexpress } from "react-icons/si";
import { TbLego, TbBrandDisney } from "react-icons/tb";
export default function HomePartners() {
  return (
    <section className="container home_partners">
      <h1>our partners</h1>
      <article className="partners">
        <ul>
          <li>
            <SiNike />
          </li>
          <li>
            <SiAdidas />
          </li>
          <li>
            <SiReebok />
          </li>
        </ul>
        <ul>
          <li>
            <TbLego />
          </li>
          <li>
            <TbBrandDisney />
          </li>
          <li>
            <SiAliexpress />
          </li>
        </ul>
      </article>
    </section>
  );
}
