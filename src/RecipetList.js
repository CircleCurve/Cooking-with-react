import React from "react";
import Recipe from "./Recipe";

export default function RecipetList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
