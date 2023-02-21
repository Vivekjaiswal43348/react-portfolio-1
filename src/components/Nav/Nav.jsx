import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const Nav = () => {
  // const [activeTab, setActiveTab] = useState("");
  return (
    <nav>
      {/* <a href="#" className={activeTab === "" ? "active" : ""} onClick={()=> setActiveTab('')} title='Header'>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeTab === "about" ? "active" : ""} onClick={()=> setActiveTab('about')} title='About'>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeTab === "experience" ? "active" : ""} onClick={()=> setActiveTab('experience')} title='Experience'>
        <BiBook />
      </a>
      <a href="#services" className={activeTab === "services" ? "active" : ""} onClick={()=> setActiveTab('services')} title='Services'>
        <RiServiceLine />
      </a>
      <a href="#contact" className={activeTab === "contact" ? "active" : ""} onClick={()=> setActiveTab('contact')} title='Contact'>
        <BiMessageSquareDetail />
      </a> */}
      <a href="#" className="header" title="Header">
        <AiOutlineHome />
      </a>
      <a href="#about" className="about" title="About">
        <AiOutlineUser />
      </a>
      <a href="#experience" className="experience" title="Experience">
        <BiBook />
      </a>
      <a href="#services" className="services" title="Services">
        <RiServiceLine />
      </a>
      <a href="#portfolio" className="portfolio" title="Portfolio">
        <MdScreenSearchDesktop />
      </a>
      <a href="#testimonials" className="testimonials" title="Testimonials">
        <VscFeedback />
      </a>
      <a href="#contact" className="contact" title="Contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
