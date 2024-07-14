import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Discover the magic with five Stars - Your style, our passion redefine your shopping experience!",
  "Here we are transforming your shopping journey from ordinary to extraordinary",
  "Step into a world of wonders and discover the magic within",
  `From women's, men's, and kids' essentials to home and outdoor accessories - we have it all!`,
];

const HomeAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="animation_container container">
      <h1>
        <TextTransition
          springConfig={presets.wobbly}
          className={`${
            textIndex == 0 || textIndex == 2 ? "dark_letters" : ""
          }`}
        >
          {TEXTS[textIndex % TEXTS.length]}
        </TextTransition>
      </h1>
    </section>
  );
};
export default HomeAnimation;
