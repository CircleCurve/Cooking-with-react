import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipetListContext } from "./App";
import PersonList from "./PersonList";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } =
    useContext(RecipetListContext);
  const { _id, name, cookTime, servings, instructions, ingredients, persons } =
    props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            onClick={() => handleRecipeSelect(_id)}
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            onClick={() => handleRecipeDelete(_id)}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Persons</span>
        <div className="recipe__value recipe__value--indented">
          <PersonList persons={persons} />
        </div>
      </div>
    </div>
  );
}
