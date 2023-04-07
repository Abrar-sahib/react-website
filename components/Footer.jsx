import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='section lin flex-col'>
      <div className="footer-nav flex-row">
        <div className='logo'>
          <h1>A-<span>ROOM</span></h1>
        </div>
        <div className='navlink fot-nav flex-row'>
          <ul className='navlinks fot-link flex-row'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#clints'>Clients</a></li>
            <li><a href='#blog'>Blog</a></li>
            <li><a href='#contact us'>Contact Us</a></li>
          </ul>
        </div> 
        <div className="social flex-row">
          <div className="icons flex-row">
            <div className="icon"><FaFacebook /></div>
            <div className="icon"><FaInstagram /></div>
            <div className="icon"><FaTwitter /></div>
            <div className="icon"><FaYoutube /></div>
          </div>
        </div>
      </div>
      <div className="copy flex-row">
        <h6>© BY A-ROOM ALL RIGHT RESERVED 2023!</h6>
      </div>
    </div>
  )
}

export default Footer