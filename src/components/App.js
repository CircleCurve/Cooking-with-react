import React, { useEffect, useState } from "react";
import RecipetList from "./RecipetList";
import { v4 as uuidv4 } from "uuid";
import "../css/app.css";
import RecipeEdit from "./RecipeEdit";

export const RecipetListContext = React.createContext();

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

// const cacheRecipes = () => {
//   const recipeJson = localStorage.getItem(LOCAL_STORAGE_KEY);
//   if (recipeJson != null) return JSON.parse(recipeJson);
//   return sampleRecipes;
// };

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState([]);
  const selectedRecipe = recipes.find(
    (recipe) => recipe._id === selectedRecipeId
  );
  //api errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((e) => console.log("fetch data error :", e));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
    setErrors({});
  };

  const handleRecipeAdd = () => {
    const newRecipe = {
      _id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      show: true,
      ingredients: [{ _id: uuidv4(), name: "", amount: "" }],
      persons: [{ _id: uuidv4(), name: "" }],
    };
    setSelectedRecipeId(newRecipe._id);
    setRecipes([...recipes, newRecipe]);
    setErrors({});
  };

  const handleRecipeDelete = (id) => {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
    setErrors({});
  };

  const handleRecipeChange = (id, recipe) => {
    //recipes.map((recipe) => (recipe.id === id ? newRecipe : recipe));
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r._id === id);
    newRecipes[index] = recipe;

    setRecipes(newRecipes);
    setErrors({});
  };

  const handleRecipeSearch = (text) => {
    setRecipes(
      recipes.map((recipe) => {
        recipe.show = recipe.name.toUpperCase().match(text.toUpperCase())
          ? true
          : false;
        return recipe;
      })
    );
  };

  const handleErrorChange = (error) => {
    setErrors(error);
  };
  const recipeValueContext = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    handleRecipeSearch,
    handleErrorChange,
  };

  return (
    <RecipetListContext.Provider value={recipeValueContext}>
      <RecipetList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} errors={errors} />}
    </RecipetListContext.Provider>
  );
}

// const sampleRecipes = [
//   {
//     id: 1,
//     name: "Plan Chiken",
//     servings: 3,
//     cookTime: "1:45",
//     instructions:
//       "1. Put salt on chiken\n2. Put chicken in oven\n3. Eat chiken",
//     show: true,
//     ingredients: [
//       {
//         id: 1,
//         name: "Chicken",
//         amount: "2 Pounds",
//       },
//       {
//         id: 2,
//         name: "Salts",
//         amount: "1 Tbs",
//       },
//     ],
//     persons: [
//       {
//         id: 1,
//         name: "Patrick",
//       },
//       {
//         id: 2,
//         name: "Ruby",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Plan Pork",
//     servings: 5,
//     cookTime: "0:45",
//     instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
//     show: true,
//     ingredients: [
//       {
//         id: 1,
//         name: "Pork",
//         amount: "3 Pounds",
//       },
//       {
//         id: 2,
//         name: "Paprika",
//         amount: "1 Tbs",
//       },
//     ],
//     persons: [
//       {
//         id: 3,
//         name: "Sam",
//       },
//       {
//         id: 4,
//         name: "Father",
//       },
//     ],
//   },
// ];

export default App;
