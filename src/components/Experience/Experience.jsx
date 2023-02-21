import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { frontendData, backendData } from "./experienceData";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skill I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {frontendData.map(({ technology, expLevel }) => {
              return (
                <article className="experience_details" key={technology}>
                  <BsFillPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{technology}</h4>
                    <small className="text-light">{expLevel}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {backendData.map((data) => {
              return (
                <article className="experience_details" key={data.technology}>
                  <BsFillPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{data.technology}</h4>
                    <small className="text-light">{data.expLevel}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
