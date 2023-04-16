import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menu }) => {
  const handleMenuActive = () => {
    setActive("active");
  };

  return (
    <Link to={menu.path} className="link navlink" onClick={handleMenuActive}>
      {menu.name}
    </Link>
  );
};

export default Navbar;
