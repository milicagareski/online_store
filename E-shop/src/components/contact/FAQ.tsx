import { FAQquestion } from "../../data/FAQData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function FAQ() {
  return (
    <section className="container faq">
      <h1 id="faq">
        Check out our FAQ section—you might find the answers you're looking for!
      </h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3500}
        showIndicators={false}
        showThumbs={false}
      >
        {FAQquestion.map((question) => (
          <div key={question.id}>
            <h1>{question.question}</h1>
            <p>{question.answer}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
