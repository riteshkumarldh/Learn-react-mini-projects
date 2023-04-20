import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/recipes",
    name: "Recipes",
  },
];

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="h-20 container mx-auto flex justify-between items-center px-8">
      <div>
        <Link to="/" className="text-3xl font-semibold">
          Recipe<span className="text-orange-500">Search</span>
        </Link>
      </div>

      <nav
        className={`${
          sidebar ? "left-0" : "left-[-300px]"
        } fixed top-0 left-0 bg-zinc-800 z-20 h-screen max-w-[300px] w-full transition-all md:static md:h-auto md:bg-transparent`}
      >
        <button
          onClick={() => setSidebar(!sidebar)}
          className="md:hidden absolute right-3 top-3 text-3xl hover:bg-zinc-200 rounded-full hover:text-zinc-800 transition-all"
        >
          <i className="bx bx-x"></i>
        </button>
        <ul className="mt-20 ml-5 flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20 md:mt-0 md:ml-0">
          {navLinks.map((navLink, index) => {
            return (
              <Navbar
                key={index}
                navLink={navLink}
                sidebar={sidebar}
                setSidebar={setSidebar}
              />
            );
          })}
        </ul>
      </nav>

      <button
        className="text-2xl md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        <i className="bx bx-menu"></i>
      </button>
    </header>
  );
};

export default Header;
