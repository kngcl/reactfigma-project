import React from "react";
/* import Stickybar from "../../Components/Stickybar/Stickybar";
import Navbar from "../../Components/Navbar/Navbar"; */
import {Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Stickybar from "../../Components/Stickybar/Stickybar";
function About() {
 const navigate = useNavigate()
 const goAfter = () => {
    setTimeout(() => {
        navigate('/')
    },5000)
 }
  return (
    <div>
        <Stickybar />
        <Navbar/>
        <Link to = "/">back</Link>
      <button type="" onClick={goAfter}></button>
    </div>
  );
}

export default About;
