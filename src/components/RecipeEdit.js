import React, { useContext } from "react";
import { RecipetListContext } from "./App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } =
    useContext(RecipetListContext);

  const handleChange = (changes) => {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  };

  const handleIngredientChange = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;

    handleChange({ ingredients: newIngredients });
  };

  const handleIngredientAdd = () => {
    const ingredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, ingredient] });
  };
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="recipe-edit__remove-button"
          onClick={() => handleRecipeSelect(false)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
        />
        <label htmlFor="name" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          onInput={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientAdd={handleIngredientAdd}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={(e) => handleIngredientAdd()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
