import HomeIntro from "../../components/home/HomeIntro";
import HomeCarousel from "../../components/home/HomeCarousel";
import HomeCollection from "../../components/home/HomeCollection";
import HomePartners from "../../components/home/HomePartners";
import HomeNewCategory from "../../components/home/HomeNewCategory";

export default function Home() {
  return (
    <section className="container">
      <HomeIntro />
      <HomeCarousel />
      <HomeCollection />
      <HomePartners />
      <HomeNewCategory />
    </section>
  );
}
