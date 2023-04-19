import { createContext, useContext, useEffect, useState } from "react";

// global context created
export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [category, setCategory] = useState("seafood");
  const [allCategories, setAllCategories] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchedRecipe, setSearchedRecipe] = useState("");
  const [recipeId, setRecipeId] = useState("52772");
  const [singleRecipe, setSingleRecipe] = useState([]);

  // fetching the category Recipes
  useEffect(() => {
    const fetchCategoriesRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        if (response.ok) {
          const data = await response.json();
          //   console.log(data);
          setRecipe(data.meals);
          setLoading(false);
        } else {
          throw Error;
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchCategoriesRecipes();
  }, [category]);

  //   fetching all the catefories
  useEffect(() => {
    const fetchAllCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );
        if (response.ok) {
          const data = await response.json();
          //   console.log(data);
          setAllCategories(data.categories);
          setLoading(false);
        } else {
          throw Error;
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, []);

  //   fetching searched Recipe
  useEffect(() => {
    const fetchSearchedRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedRecipe}`
        );
        if (response.ok) {
          const data = await response.json();
          //   console.log(data);
          setRecipe(data.meals);

          setLoading(false);
        } else {
          throw Error;
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchSearchedRecipe();
  }, [searchedRecipe]);

  //   fetching single Recipe on Click of recipe card
  useEffect(() => {
    const fetchSingleRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        if (response.ok) {
          const data = await response.json();
          //   console.log(data);
          setSingleRecipe(data.meals[0]);

          setLoading(false);
        } else {
          throw Error;
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchSingleRecipe();
  }, [recipeId]);

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        category,
        setCategory,
        allCategories,
        loading,
        setSearchedRecipe,
        searchedRecipe,
        setRecipeId,
        singleRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// custom hook for using the context
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export default RecipeProvider;
