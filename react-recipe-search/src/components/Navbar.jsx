import { NavLink } from "react-router-dom";

const Navbar = ({ navLink, setSidebar, sidebar }) => {
  return (
    <li>
      <NavLink
        onClick={() => setSidebar(!sidebar)}
        className="text-zinc-200 hover:text-orange-500"
        to={navLink.path}
      >
        {navLink.name}
      </NavLink>
    </li>
  );
};

export default Navbar;
