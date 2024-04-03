import React from 'react'
import { BsLinkedin ,BsGithub, BsFacebook} from "react-icons/bs";

const Headersocials = () => {
  return (
    <div className='header_socials' >
      <a href="https://www.facebook.com/hafiz.saqlain.0207" target='_blank' rel="noreferrer" > <BsLinkedin/> </a>
      <a href="https://github.com/laladeveloper" target='_blank' rel="noreferrer" ><BsGithub/> </a>
      <a href="http://facebook.com/fullstacknativedeveloper" target='_blank' rel="noreferrer" ><BsFacebook/> </a>
    </div>
  )
}

export default Headersocials