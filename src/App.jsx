import { Navbar } from "./components";
import HeroIntro from "./components/HomePage/HeroIntro/HeroIntro";
import Slider from "./components/HomePage/Slider/Slider";
import "./App.css";
import VirtualImg from "./components/HomePage/Virtual/VirtualImg";
import Product from "./components/HomePage/product/Product";
import Footer1 from "./components/HomePage/Footer1/Footer1";
import Category from "./components/HomePage/Category/Category";
import Footer2 from "./components/Footer2/Footer2";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroIntro />
      <Slider />
      <VirtualImg />
      <Product />
      <Footer1 />
      <Category />
      <Footer2 />
    </div>
  );
};

export default App;
