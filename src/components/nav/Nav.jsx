import React, { useState } from "react";
import "./nav.css"
import {AiOutlineHome,AiOutlineUser } from "react-icons/ai";
import {BiBook,BiMessageRoundedDetail  } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";

const Nav = () => {
  const [active, setActvie] = useState("#")
  return (
    <div>
      <nav>
        <a href="# " onClick={() => setActvie("#")} className={active === "#" ? "active" :"" }  >  <AiOutlineHome/> </a>
        <a href="#about" onClick={() => setActvie("#about")}  className={active === "#about" ? "active" :"" }><AiOutlineUser/> </a>
        <a href="#experience" onClick={() => setActvie("#experience")}  className={active === "#experience" ? "active" :"" } ><BiBook/>  </a>
        <a href="#services" onClick={() => setActvie("#services")}  className={active === "#services" ? "active" :"" }  > <MdHomeRepairService /> </a>
        <a href="#contact" onClick={() => setActvie("#contact")}  className={active === "#contact" ? "active" :"" } > <BiMessageRoundedDetail/> </a>
      </nav>
    </div>
  )
}

export default Nav