import { useRecipeContext } from "../context/RecipeContext";

const Ingredients = () => {
  const { singleRecipe } = useRecipeContext();
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = singleRecipe;

  return (
    <table className="border w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mt-8">
      <thead>
        <tr className="bg-zinc-400 text-zinc-800 h-12">
          <th className=" text-left">Ingredients</th>
          <th className=" text-left">Quantity</th>
        </tr>
      </thead>

      <tbody>
        {strIngredient1 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient1}</td>
            <td>{strMeasure1}</td>
          </tr>
        ) : null}
        {strIngredient2 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient2}</td>
            <td>{strMeasure2}</td>
          </tr>
        ) : null}
        {strIngredient3 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient3}</td>
            <td>{strMeasure3}</td>
          </tr>
        ) : null}
        {strIngredient4 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient4}</td>
            <td>{strMeasure4}</td>
          </tr>
        ) : null}
        {strIngredient5 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient5}</td>
            <td>{strMeasure5}</td>
          </tr>
        ) : null}
        {strIngredient6 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient6}</td>
            <td>{strMeasure6}</td>
          </tr>
        ) : null}
        {strIngredient7 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient7}</td>
            <td>{strMeasure7}</td>
          </tr>
        ) : null}
        {strIngredient8 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient8}</td>
            <td>{strMeasure8}</td>
          </tr>
        ) : null}
        {strIngredient9 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient9}</td>
            <td>{strMeasure9}</td>
          </tr>
        ) : null}
        {strMeasure10 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient10}</td>
            <td>{strMeasure10}</td>
          </tr>
        ) : null}
        {strMeasure11 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient11}</td>
            <td>{strMeasure11}</td>
          </tr>
        ) : null}
        {strMeasure12 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient12}</td>
            <td>{strMeasure12}</td>
          </tr>
        ) : null}
        {strMeasure13 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient13}</td>
            <td>{strMeasure13}</td>
          </tr>
        ) : null}
        {strMeasure14 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient14}</td>
            <td>{strMeasure14}</td>
          </tr>
        ) : null}
        {strMeasure15 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient15}</td>
            <td>{strMeasure15}</td>
          </tr>
        ) : null}
        {strMeasure16 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient16}</td>
            <td>{strMeasure16}</td>
          </tr>
        ) : null}
        {strMeasure17 != "" ? (
          <tr className="h-8 bg-zinc-800 hover:bg-zinc-950 transition-all">
            <td>{strIngredient17}</td>
            <td>{strMeasure17}</td>
          </tr>
        ) : null}
        {strMeasure18 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient18}</td>
            <td>{strMeasure18}</td>
          </tr>
        ) : null}
        {strMeasure19 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient19}</td>
            <td>{strMeasure19}</td>
          </tr>
        ) : null}
        {strMeasure20 != "" ? (
          <tr className="h-8 bg-zinc-900 hover:bg-zinc-950 transition-all">
            <td>{strIngredient20}</td>
            <td>{strMeasure20}</td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

export default Ingredients;
