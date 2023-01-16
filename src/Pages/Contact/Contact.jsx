import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import Stickybar from '../../Components/Stickybar/Stickybar';

import Footer from '../../Components/Footer/Footer';
import Address from './Address/Address';

export default function Contact() {
  return (
    <div>
      <Stickybar/>
      <Navbar/>
      <Hero Message="Contact Us" Message2="Home"  Message3="Gallery" />
      <Address />
      <Footer />
    </div>
  );
}
