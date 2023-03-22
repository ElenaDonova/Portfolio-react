import "./Contact.css";
import Map from "./Map";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zha6o4k",
        "template_v10u2oh",
        ref.current,
        "4ld4TAY-QIXqQ2Khv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="Contact">
      <div className="Contact__container">
        <div className="Contact__left">
          <form ref={ref} onSubmit={handleSubmit} className="Contact__form">
            <h1 className="Contact__title">Contact Us</h1>
            <input name="name" placeholder="Name" className="Contact__input" />
            <input
              name="email"
              placeholder="Email"
              className="Contact__input"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Write your message"
              className="Contact__text-area"
            />
            <button className="Contact__button">Send</button>
            {success &&
              "Your message has been sent. We'll get back to you soon!"}
          </form>
        </div>

        <div className="Contact__right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
