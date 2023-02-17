import React from "react"
import "./Contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>vivekjaiswal43348@gmail.com</h5>
            <a href="mailto:vivekjaiswal43348@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messanger</h4>
            <h5>vivekjaiswal43348@gmail.com</h5>
            <a href="https://m.me/VIVEKKUMARJAISWAL">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 8181818181</h5>
            <a href="https://wa.me/918309636712">Send a message</a>
          </article>
        </div>
        {/* END: Contact options */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
