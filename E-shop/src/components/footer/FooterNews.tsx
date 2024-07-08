import React from "react";

export default function FooterNews() {
  return (
    <section id="footer_news">
      <h3>Stay up to date</h3>
      <article id="news_container">
        <article id="footer_letter">
          {" "}
          <input type="text" placeholder="Enter you email" />
          <button>Subscribe</button>
        </article>
        <article id="footer_checkbox">
          <input type="checkbox" id="agreement" name="agreement" />
          <label htmlFor="agreement">
            <h4>
              By checking the box, you agree that you are at least 18 years old
            </h4>
          </label>
        </article>
      </article>
    </section>
  );
}
