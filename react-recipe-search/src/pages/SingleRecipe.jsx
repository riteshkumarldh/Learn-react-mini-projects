import { useRecipeContext } from "../context/RecipeContext";
import SingleRecipeDetails from "../components/SingleRecipeDetails";
import Ingredients from "../components/Ingredients";

const SingleRecipe = () => {
  const { singleRecipe, loading } = useRecipeContext();

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
    strInstructions,
  } = singleRecipe;

  return (
    <>
      {loading ? (
        <div className="text-3xl text-center my-20 uppercase">
          Loading please wait......
        </div>
      ) : (
        <section className="container mx-auto px-4 my-10">
          <div className="flex gap-8 flex-col sm:flex-row sm:items-center">
            <figure className="max-w-xs w-full">
              <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full h-full object-cover"
              />
            </figure>

            <div>
              <h2 className="text-3xl font-bold text-zinc-400 lg:text-5xl">
                {strMeal}
              </h2>
              <SingleRecipeDetails
                strCategory={strCategory}
                strArea={strArea}
                strTags={strTags}
              />
            </div>
          </div>

          {/* ingredients */}
          <div className="mt-16">
            <h2 className="text-4xl font-extrabold md:text-5xl text-zinc-500">
              Ingredients
            </h2>
            <Ingredients />
          </div>

          {/* Instructions */}
          <div className="mt-16">
            <h2 className="text-4xl font-extrabold md:text-5xl text-zinc-500">
              Intructions
            </h2>
            <p className="text-zinc-500 mt-5">{strInstructions}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleRecipe;
