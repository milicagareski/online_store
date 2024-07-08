import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/error";
import ShopingCard from "./pages/shoping_card/ShopingCard";
import New_Category from "./pages/furniture/Furniture";
import Furniture from "./pages/furniture/Furniture";

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleBtn = () => {
    setShowNav(!showNav);
  };

  return (
    <BrowserRouter>
      <section id="main_container">
        <Navbar
          showNav={showNav}
          setShowNav={setShowNav}
          toggleBtn={toggleBtn}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shoping_card" element={<ShopingCard />}></Route>
          <Route path="/furniture" element={<Furniture />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer
          showNav={showNav}
          setShowNav={setShowNav}
          toggleBtn={toggleBtn}
        />
      </section>
    </BrowserRouter>
  );
}

export default App;
