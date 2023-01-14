import React from "react";
import Styles from "./Footer.module.css";
import FooterImage from ".././../Images/footer.png";
import FooterImage2 from ".././../Images/Rectangle 1.png";
import FooterImage3 from ".././../Images/Group social icons.png";

export default function Footer() {
  return (
    <div className={Styles.Footer__Container}>
      <div className={Styles.FooterContent}>
        <div className={Styles.FooterLeft}>
          <h1 className={Styles.Footer__title}>
            If you have any question, Let us help you!
          </h1>
          <p className={Styles.Footer__sub_title}>
            If you have any questions or would like to book a tour with us,
            please don't hesitate to contact us.
            <br />
            <br />
            Phone: +250 788 123 456<br />
             Email: info@rwandatourism.com<br />
              Address: Kigali, Rwanda
          </p>
          <p className={Styles.Footer__sub_sub_title}>
            Subscribe to our newspaper
          </p>
          <div className={Styles.Submit__Email}>
            <input
              type="email"
              placeholder="Input your email here"
              className={Styles.Input__Email}
            />
            <button type="submit" className={Styles.Btn__Footer}>
              <img src={FooterImage} alt="" className="" />
            </button>
          </div>
        </div>
        <div className={Styles.FooterRight}>
          <div className={Styles.FooterImages}>
            <img src={FooterImage2} alt="" />
            <div>
            <img src={FooterImage3} alt="" className={Styles.Socials__Footer_icons}/>
            </div>
            
          </div>

          <p className={Styles.para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div className={Styles.Footer__menu}>
            <div className={Styles.FooterList}>
              <p>Home</p>
              <p>Testimonials</p>
              <p>Destinations</p>
              <p>signinn</p>
            </div>
            <div className={Styles.FooterList}>
              <p>About Us</p>
              <p>Packages</p>
              <p>Events</p>
              <p>Gallery</p>
            </div>

            <div className={Styles.FooterList}>
              <p>Our Team</p>
              <p>Blog</p>

              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <p className={Styles.Footer__LastItem}>Copyright Africa Wizzy Safari 2022</p>
    </div>
  );
}
