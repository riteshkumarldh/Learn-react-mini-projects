import React from "react";
import Card from "./Card";

import firstImg from "../assets/printer 1.svg";
import secondImg from "../assets/home 1.svg";
import thirdImg from "../assets/Outdoor 1.svg";

const Services = () => {
  return (
    <section className="services" id="servicess">
      <div className="container">
        <h2>Our services include</h2>

        <div className="cards">
          <Card
            icon={firstImg}
            color="#82B5A5"
            title="Office cleaning"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you."
          />
          <Card
            icon={secondImg}
            color="#F8CF61"
            title="Home cleaning"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you."
          />
          <Card
            icon={thirdImg}
            color="#99BBFF"
            title="Out door cleaning"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
