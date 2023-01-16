import React from "react";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Stickybar from "../../Components/Stickybar/Stickybar";

import Picture from "./Pictures/Picture";

export default function Gallery() {
  return (
    <div>
      <Stickybar />
      <Navbar />
      <Hero Message="Tour Package" Message2="Home"  Message3="Tour Package" />
      <Picture />
      <Footer />
    </div>
  );
}
