import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="imageone" />{" "}
          </div>
          <h3>Admin Dashboard </h3>
          {/* <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn "
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/saqlainlala"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="imageone" />{" "}
          </div>
          <h3>Dark Themed Dashboard </h3>
          {/* <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn "
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/saqlainlala"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="imageone" />{" "}
          </div>
          <h3>Mobile Appilcation UI/UX Design</h3>
          {/* <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn "
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/saqlainlala"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="imageone" />{" "}
          </div>
          <h3>App Design </h3>
          {/* <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn "
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/saqlainlala"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="imageone" />{" "}
          </div>
          <h3> Management Tool Design </h3>
          {/* <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn "
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/saqlainlala"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="imageone" />{" "}
          </div>
          <h3>Expense Control Panel Design </h3>
          {/* <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn "
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/saqlainlala"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div> */}
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
