import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import React, { useState } from "react";

// component import
import Navbar from "./Navbar";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="header">
      <nav className="container">
        <Link to="/" className="link logo">
          Navbar <span>Logo</span>
        </Link>

        <div className={mobileMenu ? "active navlist" : "navlist"}>
          <button className="close-btn" onClick={handleMobileMenu}>
            <i className="bx bx-x"></i>
          </button>
          {menuData.map((menu, index) => {
            return <Navbar key={index} menu={menu} />;
          })}
        </div>

        <button className="open-btn" onClick={handleMobileMenu}>
          <i className="bx bx-menu"></i>
        </button>

        <div
          onClick={handleMobileMenu}
          className={mobileMenu ? "overlay active" : "overlay"}
        ></div>
      </nav>
    </header>
  );
};

export default Header;
