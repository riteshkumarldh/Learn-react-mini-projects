import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import About from "./About";

const Home = () => {
  return (
    <>
      <section className="container mx-auto px-5 mt-10 flex flex-col gap-10 lg:flex-row lg:items-center">
        {/* left part */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-5xl font-bold mb-10 lg:text-6xl">
            Find The Perfect{" "}
            <span className="text-orange-500">Meal Recipe</span> For You
          </h1>

          <p className="text-zinc-400 mb-10 lg:text-lg">
            Elevate your dinner with the sharp and creamy flavor of our Kraft
            White Cheddar. White cheddar cheese and our enriched macaroni come
            together for a flavorful twist
          </p>

          <div className="flex gap-5 justify-center lg:justify-start">
            <Link
              className="bg-orange-500 text-zinc-200 px-4 py-2 rounded font-medium lg:px-6 lg:py-3"
              to="/recipes"
            >
              Explore Meals
            </Link>
            <Link
              className="text-orange-500 bg-zinc-200 px-4 py-2 rounded font-medium lg:px-6 lg:py-3"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
        <div className="max-w-sm mx-auto border">
          <img
            src={heroImg}
            alt="heroImg"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <About />
    </>
  );
};

export default Home;
