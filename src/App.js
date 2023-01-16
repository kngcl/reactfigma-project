import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Package from "./Pages/Package/Package";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./Pages/Gallery/Gallery";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path = "/package" element = {<Package />} />
        <Route path = "/contact" element = {<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
