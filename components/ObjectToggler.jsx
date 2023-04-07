import React, { useState } from 'react';
import {people} from './ServicesDate.js';
import './ObjectToggler.css';


function ObjectToggler() {

  const [peopl, setPeopl] = useState(people);

  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleObjects = () => {
    const nextIndex = currentIndex + 1 === peopl.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="object-toggler">
      <h1 key={peopl[currentIndex].id} className="object-name">{peopl[currentIndex].h1}</h1>
      <button className="toggle-button" onClick={toggleObjects}>Toggle Objects</button>
    </div>
  );
}

export default ObjectToggler;
