import React from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser'

function ContactUs() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_opybiz9', 'template_v2lbi34', e.target, 'SjgzCgvSeO4DDZQhS')
  }
  return (
    <div id='contactus' className='section'>
       <div className="form flex-col">
                <div className="form-text flex-col">
                    <h4>Get A Plan</h4>
                    <h2>Contact Us</h2>
                </div>
                <form className='usform' onSubmit={sendEmail}>
                  <label for="Your Name">Your Name</label>
                  <input type="text" name="Name" placeholder="" />
                  <label for="Your Email">Your Email</label> 
                  <input type="text" name="Email" placeholder="" />
                  <label for="Subject">Subject</label> 
                  <input type="text" name="Subject" placeholder="" />
                  <div className="left-btn flex-row">
                    <button type='submit'>Submit</button>
                  </div>
                </form>
       </div>
    </div>
  )
}

export default ContactUs