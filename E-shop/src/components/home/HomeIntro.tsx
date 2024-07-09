import React, { SetStateAction } from "react";
import { TextProps } from "../../types/HomeProps";

export default function HomeIntro({ showText, setShowText }: TextProps) {
  return (
    <section className="container intro_container">
      <article className="intro_text">
        <h4 className="intro_mobile">
          We are the best page you can find in the online market!
        </h4>
        <article id="name_page">
          {" "}
          <h2>welcome to</h2>
          <h2 id="name">fiVe stars</h2>
        </article>
        <p>Here shopping is a five-star experience!</p>
        <h4 className="intro_desktop">
          We are the best page you can find in the online market!
        </h4>
        <h3 className={{ showText } ? "display_mobile" : "display_desktop"}>
          Why choose <span>fiVe stars ?</span>
        </h3>
      </article>
    </section>
  );
}
