import React from "react";
import TextField from "./ui/Textfield";

export default function RecipePersonEdit(props) {
  const { person, handlePersonChange, handlePersonDelete, errors, isFirst } =
    props;

  const handleChange = (changes) => {
    handlePersonChange(person._id, { ...person, ...changes });
  };

  const Header = () => (
    <>
      <div>Name</div>
      <div></div>
    </>
  );

  return (
    <div className="recipe-edit__person-grid-item">
      {isFirst ? <Header /> : ""}

      <TextField
        showLabel={false}
        showError={false}
        value={person.name}
        onChange={(e) => handleChange({ name: e.target.value })}
        error={errors["name"]}
      />

      <button
        className="btn btn--danger"
        onClick={() => handlePersonDelete(person._id)}
      >
        &times;
      </button>
      <TextField
        showLabel={false}
        showInput={false}
        showError={true}
        value={person.name}
        error={errors["name"]}
      />
    </div>
  );
}
