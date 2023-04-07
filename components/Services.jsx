import React from 'react';
import './Services.css'
import { CardDate } from './CardDate';
import iconbg from '../assets/iconbg.png'
import SerSlider from './SerSlider';

function Services() {

  return (
    <div className='section services flex-col' id='services'>
      <div className="services-text flex-col">
        <span>WHAT WE OFFER</span>
        <h2>OUR SERVICES</h2>
      </div>
      <div className='services-cards flex-row'>
        {
          CardDate.map((card) => (
            <div className='cards flex-col' key={card.id}>
              <div className="front">
                <div className='img flex-col'>
                  <img className='iconbg' src={iconbg} alt="bg" />
                  <div className='first'><card.icon size="1.5em" /></div> 
                </div>
                <div className='card-text flex-col'>
                  <span >{card.heading}</span>
                  <div className='circle'>
                    <card.right size="0.5em"/>
                  </div>
                </div>
              </div>
              <div className="back">
                <h5>{card.back}</h5>
              </div>
            </div>
          ))
        }
      </div>
        <SerSlider />
    </div>
  )
}

export default Services;