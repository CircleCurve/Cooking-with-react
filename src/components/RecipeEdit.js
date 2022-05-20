import React, { useContext, useState } from "react";
import { RecipetListContext } from "./App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { v4 as uuidv4 } from "uuid";
import RecipePersonEdit from "./RecipePersonEdit";
import TextField from "./ui/Textfield";
import NumberField from "./ui/Numberfield";
import TextArea from "./ui/TextArea";

export default function RecipeEdit({ recipe, errors }) {
  const { handleRecipeChange, handleErrorChange, handleRecipeSelect } =
    useContext(RecipetListContext);

  const handleFormErrorChange = (changes) => {
    console.log("changes :", changes);
    handleErrorChange(changes);
  };
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

    function withError(errors, message) {
      for (const error of message) {
        // console.log(error.property  , "|", errors[error.property] , "|" , message , '|' , error.constrains)
        const constrains = error.constrains ?? error.constraints ?? null;
        errors[error.property] = {
          constrains: constrains
            ? Object.keys(constrains).map((constrain) => constrains[constrain])
            : {},
        };
        errors[error.property]["children"] =
          error.children && error.children.length > 0
            ? withError({}, error.children)
            : [];
      }

      return errors;
    }

    if (!rawResponse.ok) {
      let errors = {};
      console.log(content.message);
      handleFormErrorChange(withError(errors, content.message));
      console.log(errors);
    }

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
        <TextField
          name="name"
          id="name"
          label="Name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
          error={errors.name}
        />
        <TextField
          name="cookTime"
          id="cookTime"
          label="Cook time"
          value={recipe.cookTime}
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          error={errors.cookTime}
        />
        <NumberField
          name="servings"
          id="servings"
          label="Servings"
          min="1"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          error={errors.servings}
        />

        <TextArea
          label="Instructions"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
          error={errors.instructions}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        {recipe.ingredients.map((ingredient, index) => (
          <RecipeIngredientEdit
            key={ingredient._id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            errors={errors.ingredients?.children[index]?.children ?? {}}
            isFirst={index === 0}
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
