import React from "react";
import { LuSofa } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function HomeNewCategory() {
  return (
    <section className="container container_new_category">
      <article>
        <article className="sofa_container">
          <p>new category is coming to our website</p>
          <Link to="./furniture">
            {" "}
            <span id="sofa">
              <LuSofa />
            </span>
          </Link>
        </article>
        <article>
          <h1>Soon!</h1>
        </article>
        <p>
          Stay tuned for more updates and be the first to know when our
          furniture collection goes live by subscribing to our newsletter.
        </p>
      </article>
      <article className="free_shiping">
        <p>
          Our page offers more than <span>100</span> products with{" "}
          <span>free</span> shipping!
        </p>
        <p>Ready to start shopping?</p>
        <Link to="./products">
          <button className="btn">Let's GO!</button>
        </Link>
      </article>
    </section>
  );
}
