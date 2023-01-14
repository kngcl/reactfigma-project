import React from "react";
import Styles from "../Packagehome/Packages.module.css";
import US from "./WhyUs.module.css";
import Us1 from "../../../Images/car.png";
import Us2 from "../../../Images/CheckCircleOutlined.png";
import Us3 from "../../../Images/user.png";
import Us4 from "../../../Images/good.png";

export default function WhyUs() {
  const Why = [
    {
      src: Us1,
      heading: "100+ tours around Rwanda",
    },
    {
      src: Us2,
      heading: "100% Trusted travel agency",
    },
    {
      src: Us3,
      heading: "10 years of travel experience",
    },
    {
      src: Us4,
      heading: "90% of travelors are happy",
    },
  ];
  return (
    <div>
      <div className={Styles.Title}>
        <h2 className={Styles.Pack__Title}>Why us?</h2>
        <h1 className={Styles.Pack__Subtitle}>
          Why Travel with Africa wizzy Safari
        </h1>
      </div>
      <div className={US.content}>
        {Why.map((Us) => {
          return (
            <div className={US.us}>
              <p><img src={Us.src} alt="" /></p>
              <p className={US.text}>{Us.heading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
