import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="/" className="footer_logo">
          <img src={logo} alt="logo" srcset="" />
        </a>

        <ul className="permalinks">
          <li>
            <a href="#header">Home</a>{" "}
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience </a>
          </li>
          <li>
            <a href="#services">Services </a>
          </li>
          <li>
            <a href="#portfolio">Portfolio </a>
          </li>
          <li>
            <a href="#testimonials">Testimonials </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
        </ul>
        <div className="footer_socials">
          <a href="http://facebook.com">Facebook</a>
          <a href="http://instagram.com">Instagram</a>
          <a href="http://twitter.com">Twitter</a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Hafiz Usama. All rights reserved. </small>
          <br />{" "}
          <small>
            Websiste Developed by
            <a href="http://hafizsaqlain.tech" target="_blank"> Hafiz Saqlain</a> .
          </small>
        </div>
      </footer>
    </section>
  );
}

export default Footer