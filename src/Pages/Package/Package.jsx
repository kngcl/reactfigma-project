import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Stickybar from "../../Components/Stickybar/Stickybar";
import Packagehome from "../Home/Packagehome/Packagehome";
import Sites from "../../Components/Sites/Site";
import Hero from "../../Components/Hero/Hero";
import Arrow1 from "../../Images/Button (1).png"
import Arrow2 from "../../Images/Button.png"
import Styles from "./Package.module.css"
export default function Package() {
  return (
    <div>
      <Stickybar />
      <Navbar />
      <Hero Message="Tour Package" Message2="Home"  Message3="Tour Package"/>
      <Packagehome />
      <Sites />
      <Sites />
     <div className={Styles.arrow}>
    <p> <img src = {Arrow1} alt ="" /></p>
    <p> <img src = {Arrow2} alt ="" /></p>
      </div>
      <Footer />
    </div>
  );
}
