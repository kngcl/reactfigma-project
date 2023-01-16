import React from "react";
import Vector1 from "../../Images/Vector (4).png";
import Hro1 from "./Hero.module.css"

export default function Hero({ Message, Message2, Message3 }) {
  return (
    <div>
      <div className={Hro1.hero}>
        <div className={Hro1.Textcontent}>
          <h1 className={Hro1.hero_Title}>{Message}</h1>
          <p className={Hro1.hero_para}>
            <div className={Hro1.align}>
              <p>{Message2} </p>
              <p> <img src={Vector1} alt="alt" /></p>
             <span className={Hro1.color_para}>{Message3}</span>
              
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
