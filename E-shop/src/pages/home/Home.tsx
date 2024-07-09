import HomeIntro from "../../components/home/HomeIntro";
import HomeCarousel from "../../components/home/HomeCarousel";
import HomeCollection from "../../components/home/HomeCollection";
import HomePartners from "../../components/home/HomePartners";
import HomeNewCategory from "../../components/home/HomeNewCategory";
import { useEffect, useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(true);

  const handleText = () => {
    if (window.innerWidth > 1100) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleText);

    return () => {
      window.removeEventListener("resize", handleText);
    };
  }, []);

  return (
    <section className="container main_container home_container">
      <HomeIntro showText={showText} setShowText={setShowText} />
      <HomeCarousel showText={showText} setShowText={setShowText} />
      <HomeCollection />
      <HomePartners />
      <HomeNewCategory />
    </section>
  );
}
