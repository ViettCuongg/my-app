import Footer2 from "../Footer2/Footer2";
import Category from "./Category/Category";
import Footer1 from "./Footer1/Footer1";
import Slider from "./Slider/Slider";
import VirtualImg from "./Virtual/VirtualImg";
import Navbar from "./header/Navbar";
import Product from "./product/Product";
import HeroIntro from "./HeroIntro/HeroIntro";

const Homepage = () => {
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

export default Homepage;
