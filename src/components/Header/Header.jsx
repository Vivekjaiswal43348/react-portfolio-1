import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "./../../assets/portfolio-img_6.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section className="header_section" id="header">
      <header>
        <div className="container header_container">
          <h5>Hello, I'm</h5>
          <h1>Vivek Jaiswal</h1>
          <h5 className="text-light">Web Developer</h5>

          <CTA />

          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
