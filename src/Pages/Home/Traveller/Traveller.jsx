import React from "react";
import Styles from "../Packagehome/Packages.module.css";
import Travel from "../Traveller/Traveller.module.css";
import Location1 from "../../../Images/Ellipse 135.png";
import Circle from "../../../Images/Ellipse 136.png"

export default function Destination() {
  const Locations = [
    {
      src: Location1,
      src2: Circle,
      heading: "Emma Waston",
      description:
        "I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.",
    },
    {
      src: Location1,
      src2: Circle,
      heading: "Emma Waston",
      description:
        "I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.",
    },
    {
      src: Location1,
      src2: Circle,
      heading: "Emma Waston",
      description:
        "I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.",
    },
  ];
  return (
    <div className={Travel.Desti}>
      <div className={Styles.Title}>
        <h2 className={Styles.Pack__Title}>Our Traveller Say</h2>
        <h1 className={Styles.Pack__Subtitle}>What our clients say about us</h1>
      </div>
      <div className={Travel.sites}>
        {Locations.map((location) => {
          return (
            <div>
              <div className={Travel.up}>
                <div className={Travel.image}>
                 <img src={location.src} alt="el" className={Travel.image} />
                 <img src={location.src2} alt="el" className={Travel.image2} />
                </div>
                  <p className={Travel.head}>{location.heading}</p>
                  <p className={Travel.des}>{location.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
