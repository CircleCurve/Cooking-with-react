import React from "react";
import TextField from "./ui/Textfield";

export default function RecipeIngredientEditError({ errors }) {
  console.log(errors);
  return (
    <>
      <TextField showLabel={false} showInput={false} showError={true} />
      {/* <TextField
        showLabel={false}
        showError={false}
        value={ingredient.amount}
        onChange={(e) => handleChange({ name: e.target.value })}
      /> */}
    </>
  );
}
