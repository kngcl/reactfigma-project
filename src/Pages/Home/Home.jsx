import React from "react";
import Stickybar from "../../Components/Stickybar/Stickybar";
import Navbar from "../../Components/Navbar/Navbar";
import Styles from "./Home.module.css";
import Search from "../../Images/🔹Icon Color.png";
import Arrow from "../../Images/icon.png";
import Button from "../../Components/Button/Button";
import Packagehome from "./Packagehome/Packagehome";
import Sites from "../../Components/Sites/Site";
import Destination from "./Destinations/Destination";
import WhyUs from "./WhyUs/WhyUs";
import Traveller from "./Traveller/Traveller";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <div>
      <Stickybar />
      <Navbar />

      <div className={Styles.hero}>
        <div className={Styles.Textcontent}>
          <h1 className={Styles.hero_Title}>
            Experience the beauty of Rwanda with us
          </h1>
          <p className={Styles.hero_para}>
            Discover the Land of a Thousand Hills
          </p>
        </div>

        <div className={Styles.activies}>
          <div className={Styles.search_Content}>
            <div>
              <input
                type="text"
                placeholder="Search activities or Destinations"
                className={Styles.inputcontent}
              />
              <img
                src={Search}
                alt="icons"
                className={Styles.hero__search_icon}
              />
            </div>
            <div className={Styles.guest__content}>
              <label for="" className={Styles.guest}>
                Guest
              </label>
              <p className={Styles.adult}>
                2 Adult{" "}
                <img src={Arrow} alt="" className={Styles.hero__arrow} />
              </p>
            </div>
            <div className="time">
              <label for="" className={Styles.Date}>
                Date
              </label>
              <p className={Styles.format}>
                12 - 13 April 2021{" "}
                <img src={Arrow} alt="" className={Styles.hero__arrow} />
              </p>
            </div>
            <div className="Package">
              <label for="" className={Styles.Package}>
                Package
              </label>
              <p className={Styles.all}>
                All <img src={Arrow} alt="" className={Styles.hero__arrow} />
              </p>
            </div>
            <Button>get out</Button>
          </div>
        </div>
      </div>
      <Packagehome />
      <Sites />
      <Destination />
      <WhyUs />
      <Traveller />
      <Footer />
    </div>
  );
}

export default Home;
