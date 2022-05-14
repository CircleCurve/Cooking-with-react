import React, { useContext } from "react";
import { RecipetListContext } from "./App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { v4 as uuidv4 } from "uuid";
import RecipePersonEdit from "./RecipePersonEdit";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } =
    useContext(RecipetListContext);

  const handleChange = (changes) => {
    handleRecipeChange(recipe._id, { ...recipe, ...changes });
  };

  const handleIngredientChange = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i._id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  const handleIngredientAdd = () => {
    const ingredient = {
      _id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, ingredient] });
  };

  const handleIngredientDelete = (id) => {
    handleChange({
      ingredients: recipe.ingredients.filter(
        (ingredient) => ingredient._id !== id
      ),
    });
  };

  const handlePersonChange = (id, person) => {
    const newPersons = [...recipe.persons];
    const index = newPersons.findIndex((newPerson) => newPerson._id === id);
    newPersons[index] = person;

    handleChange({ ...recipe, persons: newPersons });
  };

  const handlePersonAdd = () => {
    const newPerson = {
      _id: uuidv4(),
      name: "",
    };
    handleChange({ ...recipe, persons: [...recipe.persons, newPerson] });
  };

  const handlePersonDelete = (id) => {
    const newPersons = [...recipe.persons];

    handleChange({
      ...recipe,
      persons: newPersons.filter((newPerson) => newPerson._id !== id),
    });
  };

  const handleSubmit = async () => {
    const rawResponse = await fetch(
      `http://localhost:3001/recipes/${recipe._id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    );
    const content = await rawResponse.json();

    // console.log("after handleSubmit :" , content);
  };

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__top-button-container">
        <button className="btn btn--success" onClick={() => handleSubmit()}>
          Submit
        </button>
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
          onChange={(e) => handleChange({ name: e.target.value })}
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
          onChange={(e) => handleChange({ cookTime: e.target.value })}
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
          onChange={(e) =>
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
          onChange={(e) => handleChange({ instructions: e.target.value })}
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
            key={ingredient._id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
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
      <label className="recipe-edit__label">Persons</label>
      <div className="recipe-edit__person-grid">
        <div>Name</div>
        <div></div>
        {recipe.persons.map((person) => (
          <RecipePersonEdit
            key={person._id}
            person={person}
            handlePersonChange={handlePersonChange}
            handlePersonDelete={handlePersonDelete}
          />
        ))}
      </div>
      <div className="recipe-edit__add-person-btn-container">
        <button className="btn btn--primary" onClick={(e) => handlePersonAdd()}>
          Add Person
        </button>
      </div>
    </div>
  );
}
