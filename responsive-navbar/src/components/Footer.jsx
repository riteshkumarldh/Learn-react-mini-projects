import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link
        to="https://github.com/riteshkumarldh"
        target="_blank"
        className="link"
      >
        Ritesh Kumar
      </Link>
    </footer>
  );
};

export default Footer;
