import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="my-36 container mx-auto px-5 text-center">
      <h1 className="text-5xl text-slate-500 font-extrabold lg:text-7xl mb-10">
        404 - Page Not Found
      </h1>
      <Link className="px-6 py-3 bg-orange-600 rounded font-medium" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
