export default function FooterCR() {
  const date = new Date().getFullYear();
  return (
    <section className=" footer_cr">
      <h4>
        &copy; <span>{date}</span> Build by <a href="#">Milica Gareski</a>
      </h4>
    </section>
  );
}
