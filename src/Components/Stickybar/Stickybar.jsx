import Sticky from "./Stickybar.module.css";
import vec3 from "../../Images/Vector (1).png";
import vec4 from "../../Images/Vector (2).png";
import vec5 from "../../Images/Group social icons.png";
import React from "react";

function Stickybar() {
  return (
    <div>
      <div className={Sticky.stick}>
        <div className={Sticky.stickContent}>
          <div className={Sticky.left}>
            <span className={Sticky.span1}>
              <span>
                <img src={vec3} alt="vector1" />
              </span>{" "}
              <span> +250 784 688 641</span>
            </span>
            <span className={Sticky.span2}>
              <span>
                <img src={vec4} alt="vector2" />
              </span>
              <span>bbonteemma@gmail.com</span>
            </span>
          </div>
          <div className={Sticky.right}>
            <p>
              <img src={vec5} alt="vector3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stickybar;
