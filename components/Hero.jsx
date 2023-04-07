import React from 'react'
import './Hero.css'
import { BsFillGearFill, BsCashCoin } from 'react-icons/bs'
import room from '../assets/room.png'

function Hero() {
  return (
    <div id='home' className=' hero flex-row'>
      <div className="left flex-col">
        <h1>
          CREATE YOUR
          CUSTOM
          WORKSPACE.
        </h1>
        <span>
          IN A BUILDING OR LARGE VEHICLE,
          LIKE A SHIP, A ROOM  TO WHICH ENTRY 
        </span>
        <div className="line one flex-row">
          <div className="hero-icon">
            <BsFillGearFill />
          </div>
          <div className="icon-text">
            <h4>
              UPGRADEABLE
            </h4>
            <span>
              1 - 3 LEVEL
            </span>
          </div>
        </div>
        <div className="line flex-row">
          <div className="hero-icon">
            <BsCashCoin />
          </div>
          <div className="icon-text">
            <h4>
              UPGRADEABLE
            </h4>
            <span>
              1 - 3 LEVEL
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={room} alt="room" />
      </div>
    </div>
  )
}

export default Hero;