import React from "react";
import heroImg from "../assets/hero-img.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="left">
          <h1>Let us handle your next cleaning</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Thank
            you.
          </p>

          <a href="#">Book now</a>
        </div>
        <div className="right" width={771} height={439}>
          <img src={heroImg} alt="heroimg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
