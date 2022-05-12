import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => (
    <Ingredient key={ingredient._id} {...ingredient} />
  ));
  return <div className="ingredient-grid">{ingredientElements}</div>;
}
