import React from "react";
import RecipetList from "./RecipetList";

function App() {
  return <RecipetList recipes={sampleRecipes} />;
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
