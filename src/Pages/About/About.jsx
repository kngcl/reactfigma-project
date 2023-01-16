import React from "react";
import Footer from "../../Components/Footer/Footer";
import Stickybar from "../../Components/Stickybar/Stickybar";
import AboutContent from "./AboutContent";
import Hero2 from "./Hero2/Hero2"
function About() {
  /*  const navigate = useNavigate()
 const goAfter = () => {
    setTimeout(() => {
        navigate('/')
    },5000)
 } */
  return (
    <div>
      <Stickybar />
      <Hero2 />
      <AboutContent />
      <Footer/>
    </div>
  );
}

export default About;
