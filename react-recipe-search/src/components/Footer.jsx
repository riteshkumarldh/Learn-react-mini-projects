import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-zinc-800 py-10">
      <div className="container mx-auto text-center flex flex-col gap-3">
        <div>
          <Link to="/" className="text-3xl font-semibold">
            Recipe<span className="text-orange-500">Search</span>
          </Link>
        </div>

        <p className="text-zinc-500 text-base">
          Find the perfect meal recipe for you
        </p>

        <span className="text-xs text-zinc-400">
          ©{" "}
          <a
            href="https://github.com/riteshkumarldh"
            target="_blank"
            className="text-orange-500"
          >
            Ritesh Kumar
          </a>{" "}
          All right reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
