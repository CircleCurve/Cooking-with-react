import React from "react";
import TextField from "./ui/Textfield";

export default function RecipeIngredientEdit(props) {
  // const { useContext(RecipetListContext)
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete,
    errors,
    isFirst,
  } = props;

  const handleChange = (changes) => {
    handleIngredientChange(ingredient._id, { ...ingredient, ...changes });
  };

  const Header = () => (
    <div className="recipe-edit__ingredient-grid-item">
      <div>Name</div>
      <div>Amount</div>
      <div></div>
    </div>
  );

  return (
    <>
      {isFirst ? <Header /> : ""}
      <div className="recipe-edit__ingredient-grid-item">
        <TextField
          showLabel={false}
          showError={false}
          value={ingredient.name}
          onChange={(e) => handleChange({ name: e.target.value })}
          error={errors["name"]}
        />
        <TextField
          showLabel={false}
          showError={false}
          value={ingredient.amount}
          onChange={(e) => handleChange({ amount: e.target.value })}
          error={errors["amount"]}
        />

        <button
          className="btn btn--danger"
          onClick={() => handleIngredientDelete(ingredient._id)}
        >
          &times;
        </button>
        <TextField
          showLabel={false}
          showInput={false}
          showError={true}
          error={errors["name"]}
        />
        <TextField
          showLabel={false}
          showInput={false}
          showError={true}
          error={errors["amount"]}
        />
        <div />
      </div>
    </>
  );
}
