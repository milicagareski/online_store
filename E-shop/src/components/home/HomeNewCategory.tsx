import React from "react";
import { LuSofa } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function HomeNewCategory() {
  return (
    <section className="container container_new_category">
      <section className="category_furniture">
        <article>
          <article className="sofa_container">
            <p id="new_category">new category is coming to our website</p>
            <Link to="./furniture">
              {" "}
              <span className="sofa">
                <LuSofa />
              </span>
            </Link>
          </article>
          <article>
            <h1>Soon!</h1>
          </article>
          <p id="new_category_explain">
            Stay tuned for more updates and be the first to know when our
            furniture collection goes live by subscribing to our newsletter.
          </p>
        </article>
      </section>
      <section>
        <article className="free_shiping">
          <h1 className="sofa">Fun fact!</h1>
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
    </section>
  );
}
