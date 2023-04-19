import { useState } from "react";
import { useRecipeContext } from "../context/RecipeContext";

const Search = () => {
  const { setSearchedRecipe } = useRecipeContext();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedRecipe(search);
  };

  return (
    <form className="h-16 relative w-1/2" onSubmit={handleSubmit}>
      <input
        className="bg-transparent transition-all duration-300 focus:bg-zinc-800 border border-zinc-500 h-full w-full outline-none px-5 text-lg rounded-lg placeholder:text-zinc-500 placeholder:text-lg"
        type="search"
        placeholder="Search Meals..."
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-1/2 right-3 -translate-y-1/2 text-2xl opacity-50"
      >
        <i className="bx bx-search"></i>
      </button>
    </form>
  );
};

export default Search;
