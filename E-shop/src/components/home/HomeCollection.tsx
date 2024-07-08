import React from "react";
import { Link } from "react-router-dom";

export default function HomeCollection() {
  return (
    <section className="container home_collection_container">
      <p>
        Explore our extensive range of products and find exactly what you need.
        From the latest trends to timeless essentials, Five Stars has it all.
      </p>
      <Link to="/products">
        <h1>Discover Our Collections</h1>
      </Link>
    </section>
  );
}
