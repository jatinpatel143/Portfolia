import React from 'react'
import wave  from "../assets/Images/wave.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
    <div className='Footer'>
    <img src={wave} style={{width:'100%'}} />
    <div className='footer-content'>
    <h4>Research.jatinpatel31012@gmail.com</h4>
    <div className='footer-icons'>
      <a href="https://www.instagram.com/i_am_jatin_patel__1/">
    <FaInstagram style={{color:"black" , background:"rgb(253, 197, 15)"}}/>
    </a>
    <a href="https://www.linkedin.com/in/jatin-thakur-0329b5280/">
        <FaLinkedin  style={{color:"black" ,background:"rgb(253, 197, 15)"}}/>
    </a>
    <a href="https://github.com/jatinpatel143">
   <FaGithub style={{color:"black" , background:"rgb(253, 197, 15)"}} />

    </a>

    </div>
    </div>
    </div>
  </div>
  )
}

export default Footer

// function Footer() {
//   return (

//   )
// }

