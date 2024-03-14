import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./../../../App.css";
import "../../HomePage/Slider/Slider.css";

import { ProductsData } from "../../../data/homepage/products";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
      >
        {ProductsData.length > 0 &&
          ProductsData.map((product, index) => (
            <SwiperSlide className="" key={index}>
              {product && (
                <div className="flex gap-4" key={index}>
                  <img src={product.img} alt=" " className="object-cover w-2/5 h-full" />
                  <div className="flex flex-col flex-1 py-2 pe-3">
                    <div className="w-full h-12 text-xl font-medium leading-6 text-black transition-all duration-300 cursor-pointer line-clamp-2">
                      {product.name}
                    </div>
                    <div className="h-[62px] w-full leading-5 my-4 line-clamp-3 font-normal text-base">{product.detail}</div>
          
                  </div>
                </div>
              )}
              
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
