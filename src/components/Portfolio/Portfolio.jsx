import React from "react";
import "./Portfolio.css";
import PortfolioImg1 from "./../../assets/portfolio1.jpg";

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_items">
          <div>
            <img
              src={PortfolioImg1}
              alt="Portfolio img"
              className="portfolio-img"
            />
          </div>
          <h3>Crypto Currency Dashboard and Financial Visualisation</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_items">
          <div>
            <img
              src={PortfolioImg1}
              alt="Portfolio img"
              className="portfolio-img"
            />
          </div>
          <h3>Crypto Currency Dashboard and Financial Visualisation</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_items">
          <div>
            <img
              src={PortfolioImg1}
              alt="Portfolio img"
              className="portfolio-img"
            />
          </div>
          <h3>Crypto Currency Dashboard and Financial Visualisation</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_items">
          <div>
            <img
              src={PortfolioImg1}
              alt="Portfolio img"
              className="portfolio-img"
            />
          </div>
          <h3>Crypto Currency Dashboard and Financial Visualisation</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
