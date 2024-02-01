import css from "./Footer1.module.css";
import Feedback from "../../../assets/feedbacks.jpg";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../../data/homepage/testimonials";

const Footer1 = () => {
  return (
    <div className={css.category}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            speedily say has suitable disposal and boy. Exercise joy man
            children rejoiced
          </span>
        </div>
        <img src={Feedback} alt="" />

        <div className={css.container}>
          <span>100k</span>
          <span>100k</span>Happy Customer with us
        </div>
      </div>
      <div className={css.reviews}>Revjjews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={` py-12 {css.tCarousel}`}
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span> {testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Footer1;
