import HomeIntro from "../../components/home/HomeIntro";
import HomeCarousel from "../../components/home/HomeCarousel";
import HomeCollection from "../../components/home/HomeCollection";
import HomePartners from "../../components/home/HomePartners";
import HomeNewCategory from "../../components/home/HomeNewCategory";
import HomeAnimation from "../../components/home/HomeAnimation";
import { useEffect, useState } from "react";
import CountdownTimer from "../../components/home/Counter";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleText = () => {
    if (window.innerWidth >= 1100) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };

  useEffect(() => {
    handleText();
    window.addEventListener("resize", handleText);

    return () => {
      window.removeEventListener("resize", handleText);
    };
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      if (window.innerWidth >= 1100) {
        setShowAnimation(true);
      } else {
        setShowAnimation(false);
      }
    };
    handleAnimation();
    window.addEventListener("resize", handleAnimation);
    return () => {
      window.removeEventListener("resize", handleAnimation);
    };
  }, [showAnimation]);

  return (
    <section className="container main_container home_container">
      <HomeIntro showText={showText} setShowText={setShowText} />
      {showAnimation && <HomeAnimation />}
      <section className="carousel_and_counter">
        <HomeCarousel showText={showText} setShowText={setShowText} />
        <CountdownTimer
          initialTime={300000}
          showText={showText}
          setShowText={setShowText}
        />
      </section>
      <section className="collection_and_partners">
        <HomeCollection />
        <HomePartners />
      </section>
      <HomeNewCategory />
    </section>
  );
}
