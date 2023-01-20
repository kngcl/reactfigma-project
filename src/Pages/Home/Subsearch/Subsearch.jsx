import React from 'react';
import './Subsearch.css';
import Buttons from '../../../Components/Button/Button';
import icon from '../../../Images/icon.png';

export default function Subsearch() {
  return (
    <div className="bar">
      <input type="text" placeholder="Search activities or Destinations" />
      <div className=" bar__options">
        <div className="options">
          <p>Guest</p>
          <span>
            2 Adult
            <img src={icon} alt="logo" />
          </span>
        </div>
        <div className="options">
          <p>Date</p>
          <span>
            12 - 13 April 2021
            <img src={icon} alt="logo" />
          </span>
        </div>
        <div className="options">
          <p>Package</p>
          <span>
            All
            <img src={icon} alt="logo" />
          </span>
        </div>
      </div>
      <Buttons>Book Now</Buttons>
    </div>
  );
}
