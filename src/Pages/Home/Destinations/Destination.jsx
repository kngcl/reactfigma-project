import React from "react";
import Styles from "../Packagehome/Packages.module.css";
import StylesDest from "./Destination.module.css";
import Location1 from "../../../Images/location1.png";
import Location2 from "../../../Images/lacation2.png";
import Location3 from "../../../Images/lacation3.png";
import Location4 from "../../../Images/Image Placeholder (3).png";
import forward from "../../../Images/Button.png"
import forward1 from "../../../Images/Button (1).png"

export default function Destination() {
  const Locations = [
    {
      src: Location1,
      heading: "Kigali",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
    },
    {
      src: Location2,
      heading: "Huye",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
    },
    {
      src: Location3,
      heading: "Rubavu",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
    },
    {
      src: Location4,
      heading: "Musanze",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
    },
  ];
  return (
    <div className={StylesDest.Desti}>
      <div className={Styles.Title}>
        <h2 className={Styles.Pack__Title}>Popular Destinations</h2>
        <h1 className={Styles.Pack__Subtitle}>
          Select your Best Package for your Travel
        </h1>
       </div>
       <div className={StylesDest.forwarders}>
          <p><img src={forward} alt="alt" /></p>
          <p><img src={forward1} alt="alt" /></p>
        </div>
      <div className={StylesDest.sites}>
        {Locations.map((location) => {
          return (
            <div>
              <div className={StylesDest.up}>
                <div className={StylesDest.image}>
                  <img
                    src={location.src}
                    alt="el"
                    className={StylesDest.image}
                  />
                </div>
                <div className={StylesDest.text}>
                  <p className={StylesDest.head}>{location.heading}</p>
                  <p className={StylesDest.des}>{location.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
