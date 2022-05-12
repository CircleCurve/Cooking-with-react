import React from "react";

export default function RecipeIngredientEdit(props) {
  // const { useContext(RecipetListContext)
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  const handleChange = (changes) => {
    handleIngredientChange(ingredient._id, { ...ingredient, ...changes });
  };
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient._id)}
      >
        &times;
      </button>
    </>
  );
}
