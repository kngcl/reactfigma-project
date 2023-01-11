import React from "react";
import Stickybar from "../../Components/Stickybar/Stickybar";
import Navbar from "../../Components/Navbar/Navbar";
import Styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Stickybar />
      <Navbar />
      <div className={Styles.hero}>
        <h1 className={Styles.hero_Title}>
          Experience the beauty of Rwanda with us
        </h1>
        <p className={Styles.hero_para}>
          Discover the Land of a Thousand Hills
        </p>
        <div className={Styles.activies}>
         <div className={Styles.search_Content}>
          <div c>
          <input type="text" placeholder="Search activities or Destinations" className={Styles.inputcontent}/>
          </div>
            <div  className={Styles.guest}>
              <label for=""  className={Styles.guest}>Guest</label>
              <p  className={Styles.adult}>
                2 Adult <img src="" alt="" />
              </p>
            </div>
            <div className="time">
              <label for=""  className={Styles.Date}>Date</label>
              <p  className={Styles.format}>
                12 - 13 April 2021 <img src="" alt="" />
              </p> 
            </div>
            <div className="Package">
              <label for=""  className={Styles.Package}>Package</label>
              <p  className={Styles.all}>
                All <img src="" alt="" />
              </p>
            </div>
            <div className="btn_search">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
