import React from 'react'
// import {PiWhatsappLogoFill} from 'react-icons/pi'
import {RiWhatsappFill} from 'react-icons/ri'

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=923091519080&text=Hello"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
         
          <span className="whatsapp">
           
            <RiWhatsappFill size={28} color="#25D366" />{" "}
          </span>
          whatsapp
        </a>
      </div>
    </div>
  );
}

export default CTA