import React, { useState } from 'react'


const Contact = () => {
const [formData,setFormData] = useState({
  from_name  : "",
  user_email : "",
  message : "",

})
  const sendEmail = (e) => {
    e.preventDefault();

   let wLink = `https://api.whatsapp.com/send?phone=+91810655985&text=${JSON.stringify(formData)}`;
   window.open(wLink,'_blank')
  };


  return (
    <div className='Contact-form' id='Contact'>

      <div className='Contact-left'>
        <span>Get in touch</span>
        <span>Contact Me</span>
      </div>

      <div className='Contact-right'>
        <form onSubmit={sendEmail} >
          <input type="text" onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} name='from_name' value={formData.from_name} className='user' placeholder='Name' required />
          <input type="email" onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} name='user_email' className='user' value={formData.user_email} placeholder='Email' required />
          <textarea name="message" onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} cols="30" rows="5" className='user' placeholder='Massage' value={formData.message} required></textarea>
         <button type='submit' className='button' >Send message</button>
           
        </form>
      </div>  

    </div>
  )
}

export default Contact