import React from "react";

export default function RecipeIngredientEdit(props) {
  // const { useContext(RecipetListContext)
  const { ingredient, handleIngredientChange } = props;

  const handleChange = (changes) => {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  };
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(e) =>
          handleChange({ amount: parseInt(e.target.value) || "" })
        }
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
