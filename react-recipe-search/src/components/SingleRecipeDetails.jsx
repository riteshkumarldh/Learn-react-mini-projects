import React from "react";

const SingleRecipeDetails = ({ strCategory, strArea, strTags }) => {
  return (
    <>
      <div className="flex items-center gap-4 mt-5">
        <span className="h-3 w-3 bg-orange-500 rounded-full block"></span>
        <p className="text-md text-zinc-500 font-semibold flex items-center gap-2">
          <span className="text-md text-zinc-300">Category:</span> {strCategory}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <span className="h-3 w-3 bg-orange-500 rounded-full block"></span>
        <p className="text-md text-zinc-500 font-semibold flex items-center gap-2">
          <span className="text-md text-zinc-300">Belongs to:</span> {strArea}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <span className="h-3 w-3 bg-orange-500 rounded-full block"></span>
        <p className="text-md text-zinc-500 font-semibold flex items-center gap-2">
          <span className="text-md text-zinc-300">Tags:</span> {strTags}
        </p>
      </div>
    </>
  );
};

export default SingleRecipeDetails;
