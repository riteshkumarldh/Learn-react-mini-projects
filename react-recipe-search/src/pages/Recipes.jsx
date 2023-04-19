import { useRecipeContext } from "../context/RecipeContext";

import Search from "../components/Search";
import ListedCategories from "../components/ListedCategories";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipe, category, loading } = useRecipeContext();

  return (
    <>
      {loading ? (
        <div className="text-3xl text-center my-20 uppercase">
          Loading please wait......
        </div>
      ) : (
        <section className="container mx-auto px-5 my-10">
          <Search />
          <ListedCategories />

          {/* <h2 className="mt-4">
            Results for : <span className="text-orange-500">{category}</span>
          </h2> */}

          {/* All Recipes here */}
          <div className="mt-10 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipe === null ? (
              <div className="text-lg font-semibold">
                No Result found | Search for other Recipe
              </div>
            ) : (
              recipe.map((recipe) => {
                return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
              })
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Recipes;
