import React from "react";

// img imports
import amazon from "../assets/amazon-logo 1.svg";
import ebay from "../assets/ebay-logo 1.svg";
import neteller from "../assets/neteller-logo 1 1.svg";
import master from "../assets/master-card-logo 1.svg";
import stripe from "../assets/stripe-logo 1.svg";
import klarna from "../assets/klarna-logo 1.svg";

const CompaniesLogo = () => {
  return (
    <section className="logos">
      <div className="container">
        <figure width={130} height={77}>
          <img src={amazon} alt="amazonimg" />
        </figure>
        <figure width={134} height={77}>
          <img src={ebay} alt="abayimg" />
        </figure>
        <figure width={167} height={119}>
          <img src={neteller} alt="abayimg" />
        </figure>
        <figure width={133} height={77}>
          <img src={master} alt="abayimg" />
        </figure>
        <figure width={132} height={77}>
          <img src={stripe} alt="abayimg" />
        </figure>
        <figure width={132} height={77}>
          <img src={klarna} alt="abayimg" />
        </figure>
      </div>
    </section>
  );
};

export default CompaniesLogo;
