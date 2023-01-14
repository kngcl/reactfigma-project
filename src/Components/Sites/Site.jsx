import React from "react";
import Vector1 from "../../Images/Image Placeholder.png";
import Vector2 from "../../Images/Image Placeholder (1).png";
import Vector3 from "../../Images/Image Placeholder (2).png";
import Styles from "./Sites.module.css";
import Button from "../Button/Button";

export default function Sites() {
  const Cards = [
    {
      src: Vector1,
      heading: "Akagera National Park",
      description:
        "Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.",
    },
    {
      src: Vector2,
      heading: "Bisoke Hike",
      description:
        "The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.",
    },
    {
      src: Vector3,
      heading: "Lake Kivu trip",
      description:
        "A trip to Lake Kivu can be a truly unique and memorable experience. ",
    },
  ];
  return (
    <div>
      <div className={Styles.sites}>
        {Cards.map((card) => {
          return (
            <>
              <div className={Styles.sites__Content}>
                <div className={Styles.up}>
                  <div className={Styles.image}>
                    <img src={card.src} alt="el" />
                  </div>
                  <div className={Styles.text}>
                    <p className={Styles.head}>{card.heading}</p>
                    <p className={Styles.des}>{card.description}</p>
                    <Button>Learn More</Button>
                  </div>
                </div>

                <div className={Styles.up}>
                  <div className={Styles.image}>
                    <img src={card.src} alt="el" />
                  </div>
                  <div className={Styles.text}>
                    <p className={Styles.head}>{card.heading}</p>
                    <p className={Styles.des}>{card.description}</p>
                    <Button>Learn More</Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
