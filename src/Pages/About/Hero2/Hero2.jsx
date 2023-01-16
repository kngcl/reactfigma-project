import React from 'react';
import Searchnav from '../../../Components/Navbar/Navbar';
import Monkey from '../../../Images/monkey.png';
import icon from '../../../Images/icon.png';
import './Hero2.css';

export default function Hero2() {
  return (
    <div className="hero2">
      <img src={Monkey} alt="monkey" className="monkey" />
      <Searchnav />
      <div className="hero2__text">
        <h1>We are dedicated to providing the best travel experience.</h1>
        <p className="hero2__p">Discover the Land of a Thousand Hills</p>

        <div className="hero2__choice">
          <div className="options">
            <p>Guest</p>
            <h4>
              2 Adult
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <div className="options">
            <p>Date</p>
            <h4>
              12 - 13 April 2021
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <div className="options">
            <p>Package</p>
            <h4>
              Akagera Tour
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <button type="button">Book Now</button>
        </div>
      </div>
    </div>
  );
}
