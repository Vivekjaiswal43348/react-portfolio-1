import React from "react";
import "./Portfolio.css";
import { PortfolisData } from "./PortfolioData";

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {PortfolisData.map(({media, title, github, demo, type}) => {
          return (
            <article className="portfolio_items">
              <div>
                {type === "image" && (
                  <img
                    src={media}
                    alt="Portfolio img"
                    className="portfolio-img"
                  />
                )}
                {/* {type === "video" && (
                  <video className="portfolio-vdo">
                    <source src={media} type='video/mp4'/>
                    </video>
                )} */}
              </div>
              <h3>{title}</h3>
              <div className="portfolio_items-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
