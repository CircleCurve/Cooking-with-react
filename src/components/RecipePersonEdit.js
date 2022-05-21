import React from "react";

export default function RecipePersonEdit(props) {
  const { person, handlePersonChange, handlePersonDelete, errors, isFirst } =
    props;

  const handleChange = (changes) => {
    handlePersonChange(person._id, { ...person, ...changes });
  };

  return (
    <>
      <input
        type="text"
        value={person.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handlePersonDelete(person._id)}
      >
        &times;
      </button>
    </>
  );
}
