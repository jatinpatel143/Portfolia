import React from 'react'
import jatin from "../assets/Images/patel.jpg"
import One from "../assets/Images/github.png"
import two from "../assets/Images/instagram.png"
import three from "../assets/Images/linkedin.png"
import About from './About'
import Footer from './Footer'
const Herosection = () => {
  
  return (
    <>
    <div className="Herosection">
        <div className="text">
          <ul>
          <li>Hello' it's me</li>
           {/* <li>Jatin Thakur</li> */}
           <div class="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                Jatin Patel
              </text>
            </svg>
          </div>
           <li className='list'> And I'M a  frontend Devloper </li>
           <li className='lsit2'>
              I'M  skilled frontend developer proficient in HTML, CSS, JavaScript, and popular frameworks. Experienced in creating responsive and user-friendly web interfaces.</li>
          </ul>

          <div className="i-icons">
          <a href="https://github.com/jatinpatel143">
            <img src={One} />
          </a>
          <a href="https://www.instagram.com/i_am_jatin_patel__1/">
            <img src={two}/>
          </a>
          <a href="https://www.linkedin.com/in/jatin-thakur-0329b5280/">
            <img src={three} alt="" />/
          </a>
        </div>
        </div>
        <div className="img">
            <img src={jatin} alt="" />

        </div>

    </div>

<About/>
<Footer/>
</>
  )
}

export default Herosection