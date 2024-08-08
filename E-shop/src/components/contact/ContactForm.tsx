import { useState } from "react";

export default function ContactForm() {
  const [submitBtn, setSubmitBtn] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitBtn(true);
    console.log(nameValue, emailValue, message);
    const timeoutId = setTimeout(() => {
      setSubmitBtn(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  };

  return (
    <section className="container contact_form">
      <h1>Do you have any questions?</h1>
      <h2>Feel the form bellow !</h2>
      {submitBtn && (
        <p
          style={{
            color: "green",
            textTransform: "uppercase",
            fontSize: "1.5rem",
          }}
        >
          Thank you for the message!
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <article className="contact_article">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            placeholder="name"
            id="fullName"
            name="fullName"
            required
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
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
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </article>
        <article className="contact_article">
          <label htmlFor="email">Message</label>
          <textarea
            name="message"
            placeholder="message"
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </article>
      </form>
    </section>
  );
}
