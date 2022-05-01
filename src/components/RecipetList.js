import React from "react";
import Recipe from "./Recipe";

export default function RecipetList(props) {
  const { recipes, handleRecipeAdd, handleRecipeDelete } = props;
  console.log("recipe : ", recipes);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            {...recipe}
            handleRecipeDelete={handleRecipeDelete}
          />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
}
