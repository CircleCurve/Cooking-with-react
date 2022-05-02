import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipetListContext } from "./App";

export default function RecipetList(props) {
  const { handleRecipeAdd } = useContext(RecipetListContext);
  const { recipes } = props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
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
