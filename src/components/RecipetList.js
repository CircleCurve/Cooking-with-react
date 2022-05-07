import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipetListContext } from "./App";

export default function RecipetList(props) {
  const { handleRecipeAdd, handleRecipeSearch } =
    useContext(RecipetListContext);
  const { recipes } = props;

  const handleSearch = (text) => {
    handleRecipeSearch(text);
  };
  return (
    <div className="recipe-list">
      <div className="recipe-list__search-container">
        <input
          type="text"
          name="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div>
        {recipes &&
          recipes
            .filter((recipe) => recipe.show)
            .map((recipe) => <Recipe key={recipe.id} {...recipe} />)}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
}
