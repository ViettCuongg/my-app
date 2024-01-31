import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./../../../App.css";
import "../../HomePage/Slider/Slider.css";

import { SliderProducts } from "../../../data/homepage/products";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.length > 0 &&
          SliderProducts.map((slide, i) => (
            <SwiperSlide className="" key={i}>
              {slide && (
                <div className="left-s">
                  <div className="name">
                    <span>{slide.name}</span>
                    <span>{slide.detail}</span>
                  </div>
                  <span>{slide.price}</span>
                  <div className="hover:bg-sky-200 cursor-pointer">Detail</div>
                </div>
              )}
              <img src={slide.img} alt="product" className="img-p" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
