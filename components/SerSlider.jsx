import React, {useState} from 'react';
import './SerSlider.css';
import {people} from './ServicesDate.js';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';

const SerSlider = () => {

    // const [peopl, setPeopl] = useState(people);


    const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? people.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // console.log(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === people.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
    
};

return (
    <div className='section'>
        <div className="secion-center flex-col">
            <div key={currentIndex} className='serCard flex-row'>
                <div className="serLeft flex-col">
                    <span>0{people[currentIndex].id}</span>
                    <h5 className='fade'>{people[currentIndex].firm}</h5>
                    <div className="arrows flex-row">
                        <div onClick={goToPrevious} className="left"><BsChevronLeft size="2em" /></div>
                        <div onClick={goToNext} className="right"><BsChevronRight size="2em" /></div>
                    </div>
                </div>
                <div className="serRight fade flex-col">
                    <h1>{people[currentIndex].h1}</h1>
                    <h5>{people[currentIndex].dec}</h5>
                    <span></span>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default SerSlider;