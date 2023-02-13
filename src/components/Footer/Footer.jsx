import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="logo_container">
        <a href="" className="footer_logo">
          WEB CENTRIC <sup>VIVEK</sup>
        </a>
      </div>
      <div>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#portfolio">Porfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Vivek Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
