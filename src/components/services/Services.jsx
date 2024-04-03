import React from "react";
import "./services.css";
import { MdOutlineGppGood } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Logo Design Services </h3>
          </div>
          <ul className="service_list">
            <li>
              {""}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Logo Creation</p>
              {/* <small className="level"> Create user interfaces that adapt seamlessly across devices, ensuring a consistent experience</small> */}
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p>User-Centric UI/UX</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Brand Identity Design</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Typography Selection</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Custom Design</p>
            </li>
          </ul>
        </article>
        {/* end of ui/ux design  */}
        <article className="service">
          <div className="service_head">
            <h3>Logo Application Services</h3>
          </div>
          <ul className="service_list">
            <li>
              {""}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Application Guidance </p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Business Cards</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Letterheads</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Scalability</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Promotional Materials</p>
            </li>
          </ul>
        </article>
        {/* end of web development  */}
        <article className="service">
          <div className="service_head">
            <h3> Consultation and Collaboration</h3>
          </div>
          <ul className="service_list">
            <li>
              {""}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Brand Strategy Development</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Brand Alignment </p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Brand Identity Definition</p>
            </li>
            <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p> Target Audience Identification </p>
            </li>
            {/* <li>
              {" "}
              <MdOutlineGppGood className="service_list-icon" />
              <p>Multi-Factor Authentication (MFA) </p>
            </li> */}
          </ul>
        </article>
        {/* end of content creation  */}
      </div>
    </section>
  );
};

export default Services;
