import React from 'react'
import ServicesCards from './ServicesCards'
import rejume from "../assets/Images/jatin (1).pdf"


const Services = () => {
  return (
    <div className='Services'>
      <div className='Left-services'>
        <span>My Awesome</span>
        <span> Skills / Services</span>
        <p>I love to creating new thing in technologies 
        <br /> like creating Web-Apps and website's.</p>
       <a  className='Download-cv'
        href={rejume} download>        
       Download CV
        
       </a>
      </div>

      <div className='services-cards'>

        <ServicesCards/>

      </div>

    </div>
  )
}

export default Services
