import React from "react";

import iphoneImg from "../assets/iphoneimg.png";
import playStoreImg from "../assets/Google play 1.svg";

const AppDescription = () => {
  return (
    <section className="aboutApp" id="about">
      <div className="container">
        <div className="left">
          <h1>
            Download the Clean Cruiz App on playstore and get 10% discount
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Thank
            you.{" "}
          </p>

          <img src={playStoreImg} alt="psi" />
        </div>
        <div className="right" width={336} height={665}>
          <img src={iphoneImg} alt="appimg" />
        </div>
      </div>
    </section>
  );
};

export default AppDescription;
