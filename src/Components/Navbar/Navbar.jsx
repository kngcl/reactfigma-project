import NavIcons from '../../Images/Rectangle 1.png'
import Style from "./Navbar.module.css";
import React from "react";

function Navbar() {
    return <div>
        <div className={Style.menuContent}>
                 <img src={NavIcons} alt="Nav"  className={Style.vector}/>
           <div className= {Style.menu}>
            <p> <a href="about" className={Style.menuChild}>Home</a> </p>
            <p> <a href="about" className={Style.menuChild}>About</a> </p>
            <p> <a href="about" className={Style.menuChild}>Tour package</a> </p>
            <p> <a href="about" className={Style.menuChild}>Gallery</a> </p>
            <p> <a href="about" className={Style.menuChild}>Blog</a> </p>
            <p> <a href="about" className={Style.menuChild}>Contact us</a> </p>
           </div>
           <div className={Style.btn_Content}>
           <button className={Style.btn}>Sign In</button>
           </div>
           
        </div>
    </div>
}

export default Navbar