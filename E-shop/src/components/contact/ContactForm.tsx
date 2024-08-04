export default function ContactForm() {
  return (
    <section className="container contact_form">
      <h1>Do you have any questions?</h1>
      <h2>Feel the form bellow !</h2>
      <form>
        <article className="contact_article">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            placeholder="name"
            id="fullName"
            name="fullName"
            required
          />
        </article>
        <article className="contact_article">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            required
          />
        </article>
        <article className="contact_article">
          <label htmlFor="email">Message</label>
          <textarea
            name="message"
            placeholder="message"
            id="message"
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </article>
      </form>
    </section>
  );
}
