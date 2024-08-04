import React from "react";

export default function ContactDetails() {
  return (
    <section className="container contact_details">
      <h1>contact details</h1>
      <article className="contact_details_container">
        <article className="contact_details_article">
          <h2>Location:</h2>
          <h3>7 Downing Street, Stockholm, Sweden</h3>
        </article>
        <article className="contact_details_article">
          <h2>Email address:</h2>
          <h3>support@fiVestar.com</h3>
        </article>
        <article className="contact_details_article">
          <h2>Phone number:</h2>
          <h3>+460750765434</h3>
        </article>
      </article>
    </section>
  );
}