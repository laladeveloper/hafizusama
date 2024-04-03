import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="experiencedabba">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Design Principles </h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Creativity </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Visual Communication</h4>
                <small className="text-light level">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Typography </h4>
                <small className="text-light level">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Color Theory </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Layout Design </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Software Proficiency </h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> Adobe Illustrator </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> Adobe InDesign </h4>
                <small className="text-light level ">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Corel Draw</h4>
                <small className="text-light level">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Sketch </h4>
                <small className="text-light level">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-security">
          <h3>Technical Skills </h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> Image Editing </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Vector Illustration </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> Print Design </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> UI/UX Design </h4>
                <small className="text-light level">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* <div className="experience-database">
          <h3> Problem-Solving and Adaptability </h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> MySQL </h4>
                <small className="text-light level">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>NoSQL </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> MongoDB </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4> Mongoose </h4>
                <small className="text-light level">Experienced</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
