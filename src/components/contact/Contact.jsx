import React, { useState } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const [showThankYou, setShowThankYou] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
console.log(`this is the form current ${form.current}`);
    emailjs
      .sendForm(
        "service_dvevmzi",
        "template_ci4lgqd",
        form.current,
        "2cD4lKNulobE8ayCx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowThankYou(true); // Show thank you message
          form.current.reset();
          setTimeout(() => {
            setShowThankYou(false); // Hide thank you message after 5-8 seconds
          }, 6000); // Adjust the time as needed (6 seconds)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email </h4>
            <h5>Hafiz Usama</h5>
            <a
              href="mailto:fullstackdevelopernative@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messenger </h4>
            <h5>Hafiz Usama</h5>
            <a
              href="https://m.me/hafiz.Usama.0207"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp </h4>
            <h5>Hafiz Usama</h5>
            <a
              href="https://api.whatsapp.com/send?phone=923091519080&text=Hello Usama"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a Message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            required
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          {showThankYou ? (
            <div className="operwalakhana">
              <div
                className={`thank-you-message ${showThankYou ? "" : "hide"}`}
              >
                Thank you for your message!
              </div>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary formSend">
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
