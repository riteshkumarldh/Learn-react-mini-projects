import React from "react";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../context/RecipeContext";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMealThumb, strMeal } = recipe;
  const { setRecipeId } = useRecipeContext();

  return (
    <Link
      to={idMeal}
      className="border max-w-xs w-full"
      onClick={() => setRecipeId(idMeal)}
    >
      <figure className="w-full">
        <img
          className="h-full w-full object-cover"
          src={strMealThumb}
          alt={strMeal}
        />
      </figure>

      <h2 className="text-center bg-fuchsia-500 px-2 text-white py-5">
        {strMeal}
      </h2>
    </Link>
  );
};

export default RecipeCard;
