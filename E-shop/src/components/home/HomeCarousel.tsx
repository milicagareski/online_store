import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeCarousel() {
  return (
    <section className="carousel_section">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <h1>Unmatched Quality</h1>
          <p>
            Our products are sourced from trusted brands and undergo strict
            quality checks.
          </p>
        </div>
        <div>
          <h1>Outstanding Service</h1>
          <p>
            We go above and beyond to ensure your shopping experience is
            seamless and enjoyable.
          </p>
        </div>
        <div>
          <h1>Competitive Prices</h1>
          <p>Enjoy the best deals and offers on a wide range of products.</p>
        </div>
        <div>
          <h1>Fast and Reliable Shipping</h1>
          <p>We ensure your orders reach you quickly and safely.</p>
        </div>
      </Carousel>
    </section>
  );
}
