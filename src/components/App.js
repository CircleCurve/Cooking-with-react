import React, { useEffect, useState } from "react";
import RecipetList from "./RecipetList";
import { v4 as uuidv4 } from "uuid";
import "../css/app.css";

export const RecipetListContext = React.createContext();

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

const cacheRecipes = () => {
  const recipeJson = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (recipeJson != null) return JSON.parse(recipeJson);
  return sampleRecipes;
};

function App() {
  const [recipes, setRecipes] = useState(cacheRecipes);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const recipeValueContext = {
    handleRecipeAdd,
    handleRecipeDelete,
  };
  return (
    <RecipetListContext.Provider value={recipeValueContext}>
      <RecipetList recipes={recipes} />
    </RecipetListContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plan Chiken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chiken\n2. Put chicken in oven\n3. Eat chiken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salts",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plan Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "1 Tbs",
      },
    ],
  },
];

export default App;
