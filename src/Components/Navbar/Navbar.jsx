import NavIcons from '../../Images/Rectangle 1.png'
import { Link } from 'react-router-dom';
import Style from "./Navbar.module.css";
import React from "react";
import Button from '../Button/Button';

function Navbar() {
    return <div>
        <div className={Style.Navbar__Menu} >
            <div className={Style.menuContent}>
            <div className={Style.icons}>
            <img src={NavIcons} alt="Nav"  className={Style.vector}/>
           <div className= {Style.menu}>
            <p> <Link  className={Style.menuChild} to="/">Home</Link> </p>
            <p> <Link  className={Style.menuChild} to = "about">About</Link> </p>
            <p> <a href="about" className={Style.menuChild}>Tour package</a> </p>
            <p> <a href="about" className={Style.menuChild}>Gallery</a> </p>
            <p> <a href="about" className={Style.menuChild}>Blog</a> </p>
            <p> <a href="about" className={Style.menuChild}>Contact us</a> </p>
           </div>
            </div>
              
         
          <Button>Sign In </Button>
            </div>
            

           
        </div>
    </div>
}

export default Navbar