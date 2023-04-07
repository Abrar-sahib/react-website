import React, {useState} from 'react';
import './Clints.css';
import {clints} from './ClintsData.js';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';

const Clints = () => {

  const [clint, setClint] = useState(clints);


    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? clints.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      // console.log(newIndex);
    };
    const goToNext = () => {
      const isLastSlide = currentIndex === clints.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex);
    
  };

  return (
    <div id='clints' className='section rec'>
      <div key={currentIndex} className="clint-outer flex-row">
        <div className="clint-left flex-col">
          <h4>THEY TALK ABOUT US</h4>
          <h1>{clint[currentIndex].h1}</h1>
          <div className="left-btn">
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="clint-right flex-col">
          <div className="right-count flex-col">
            <span>0{clint[currentIndex].id}
            <span className='sl'> / </span> 
            05</span>
          </div>
          <div className="arrow flex-row">
            <div onClick={goToPrevious} className="left"><BsChevronLeft size="2em" /></div>
            <div onClick={goToNext} className="right"><BsChevronRight size="2em" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clints;