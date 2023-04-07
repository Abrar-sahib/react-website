import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import { FaBars , FaTimes  } from 'react-icons/fa'


const NavBar = () => {
  const [btnState, setBtnState] = useState(false);

  const showNav = () => {
    setBtnState(btnState => !btnState);
  }
  let toggleClass = btnState ? 'nav-active' : '';

  return (
    <div className='container flex-row'>
      <div className='logo'>
        <h1>A-<span>ROOM</span></h1>
      </div>
      <div className={`navlink ${toggleClass}`} >
        <ul onClick={showNav} className='navlinks flex-row'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#clints'>Clients</a></li>
          <li><a href='#blog'>Blog</a></li>
          <li><a href='#contactus'>Contact Us</a></li>
        </ul>
        <button 
          className='close'
          onClick={showNav}>
          <FaTimes size='1.5rem' />
        </button>
      </div>  
      <button 
        className='bars'
        onClick={showNav}>
        <FaBars size='1.5rem' />
      </button>
      
    </div>
    
  )
}

export default NavBar;