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
                <div>
                <img src={NavIcons} alt="Nav"  className={Style.vector}/>
                </div>
           
           <div className= {Style.menu}>
            <p> <Link  className={Style.menuChild} to="/">Home</Link> </p>
            <p> <Link  className={Style.menuChild} to = "about">About</Link> </p>
            <p> <Link className={Style.menuChild} to = "package">Tour package</Link> </p>
            <p> <Link  className={Style.menuChild} to = "gallery">Gallery</Link> </p>
            <p> <Link  className={Style.menuChild} to = "contact">Contact us</Link> </p>
           </div>
            </div>
              
         <div className={Style.navbutton}>
         <Button>Sign In </Button>
         </div>
         
            </div>
        
        </div>
    </div>
}

export default Navbar