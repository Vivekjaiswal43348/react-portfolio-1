import React from "react";
import "./Testimonials.css";
import { testiMonialsData } from "./TestimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        pagination={{ clickable: true }}
        slidesPerView={1}
        speed={2000}
        className="container testmonial_container"
      >
        {testiMonialsData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h4>{name}</h4>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
