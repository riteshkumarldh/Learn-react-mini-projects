import { useRecipeContext } from "../context/RecipeContext";

const ListedCategories = () => {
  const { allCategories, setCategory } = useRecipeContext();

  return (
    <div className="flex flex-row gap-3 flex-wrap mt-6">
      {allCategories.map((category, index) => {
        return (
          <button
            className="px-4 py-2 border border-orange-500 rounded"
            key={index}
            onClick={(e) => setCategory(category.strCategory)}
          >
            {category.strCategory}
          </button>
        );
      })}
    </div>
  );
};

export default ListedCategories;
