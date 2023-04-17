import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          Clean Cruiz
        </a>

        <nav className="navbar">
          <ul className="navlist">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            <a href="#">login</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
