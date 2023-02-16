import React from "react";
import "./Testimonials.css";
import Avatar1 from "./../../assets/avatar1.jpg";
import { testiMonialsData } from "./TestimonialsData";

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testmonial_container">
        {testiMonialsData.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonial" key={index}>
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h4>{name}</h4>
              <small className="client_review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
