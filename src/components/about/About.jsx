import React from "react";
import "./about.css";
// import ME from "../../assets/me-about.png";
import ME from "../../assets/me.png";
import { FiUsers } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { PiFolderOpenBold } from "react-icons/pi";

const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get to know</h5> 
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <BsAward className="about_icon" />
                <h5>Experience</h5>
                <small>3 + years</small>
              </article>
              <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients </h5>
                <small>300 + Worldwide</small>
              </article>
              <article className="about_card">
                <PiFolderOpenBold className="about_icon" />
                <h5>Projects </h5>
                <small>50 + Completed</small>
              </article>
            </div>

            <p>
              A graphic designer is a master of visual communication, utilizing
              various design elements such as typography, color theory, and
              layout principles to craft compelling designs. They have a deep
              understanding of design software such as Adobe Photoshop,
              Illustrator, and InDesign, enabling them to bring their ideas to
              life with precision and finesse. Whether it's designing marketing
              materials, brand identities, or website interfaces, they have the
              ability to create visually engaging compositions that resonate
              with target audiences.
            </p>
            <div href="#contact" className="btn btn-primary talk">
              Let's Talk
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
