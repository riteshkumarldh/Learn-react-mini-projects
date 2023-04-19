import { useRecipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { singleRecipe, loading } = useRecipeContext();

  const { strMeal, strMealThumb, strCategory, strArea, strTags } = singleRecipe;

  return (
    <>
      {loading ? (
        <div className="text-3xl text-center my-20 uppercase">
          Loading please wait......
        </div>
      ) : (
        <section className="container mx-auto px-4 my-10">
          <div className="flex gap-8 sm:items-center">
            <figure className="max-w-xs w-full">
              <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full h-full object-cover"
              />
            </figure>

            <div>
              <h2 className="text-3xl font-bold text-zinc-400 lg:text-4xl">
                {strMeal}
              </h2>
              <div className="flex items-center gap-4 mt-5">
                <span className="h-3 w-3 bg-orange-500 rounded-full block"></span>
                <p className="text-md text-zinc-500 font-semibold">
                  {strCategory}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <span className="h-3 w-3 bg-orange-500 rounded-full block"></span>
                <p className="text-md text-zinc-500 font-semibold">{strArea}</p>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <span className="h-3 w-3 bg-orange-500 rounded-full block"></span>
                <p className="text-md text-zinc-500 font-semibold">{strTags}</p>
              </div>
            </div>
          </div>

          {/* ingredients */}
          <div className="mt-16">
            <h2 className="text-3xl">Ingredients</h2>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleRecipe;
