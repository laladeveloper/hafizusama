import React from "react";
import CTA from "./CTA";
import "./header.css"
// import ME from "../../assets/me.png";
import ME from "../../assets/me-about.png";
import Headersocials from "./Headersocials";

const Header = () => {
  return (
    <>
      <header>
      <div className="container header_container" id="header" >

        <h5>Hello I'm</h5>
        <h1>Hafiz Usama </h1>
        <h5 className="text-light"> Graphic Designer </h5>
        <CTA />
        <Headersocials/>
        <div className="me">
          <img src={ME} alt="me"  />
        </div>
        <a href="#about" className="scroll_down">Scroll Down</a>
      </div>
      </header>
    </>
  );
};

export default Header;
