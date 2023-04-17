import React from "react";

import womanImg from "../assets/Woman 1 1.png";

const Customers = () => {
  return (
    <section className="aboutApp customers" id="contact">
      <div className="container">
        <div className="left">
          <h1>Our customer care agents are always ready to help you</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
            tempor incididunt ut labore dolore magna aliqua ghetu Thank you.
          </p>

          <button>Book Now</button>
        </div>
        <div className="right" width={657} height={663}>
          <img src={womanImg} alt="appimg" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
