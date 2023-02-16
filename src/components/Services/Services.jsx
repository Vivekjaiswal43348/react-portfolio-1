import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { serviceListData_1_3, serviceListData_2 } from "./serviceData";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            {serviceListData_1_3.map((desc) => {
              return (
                <li>
                  <BiCheck className="service_list-icon" />
                  <p>{desc.description}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END: UI/UX Design */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            {serviceListData_2.map((desc) => {
              return (
                <li>
                  <BiCheck className="service_list-icon" />
                  <p>{desc.description}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END: Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            {serviceListData_1_3.map((desc) => {
              return (
                <li>
                  <BiCheck className="service_list-icon" />
                  <p>{desc.description}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END: Content Creation */}
      </div>
    </section>
  );
};

export default Services;
