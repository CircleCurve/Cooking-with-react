import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div className="recipe-edit__form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cookTime">Cook time</label>
        <input type="text" name="cookTime" id="cookTime" />
        <label htmlFor="name">Servings</label>
        <input type="number" min="1" name="servings" id="servings" />
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" />
      </div>
      <br />
      <label>Ingredients</label>
      <div className="recipe-edit__ingredients">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {[1, 1, 1].map((number) => (
          <RecipeIngredientEdit />
        ))}
      </div>
      <div>Add Ingredient</div>
    </div>
  );
}
