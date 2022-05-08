import React from "react";

export default function RecipePersonEdit(props) {
  const { person, handlePersonChange, handlePersonDelete } = props;

  const handleChange = (changes) => {
    handlePersonChange(person.id, { ...person, ...changes });
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
        onClick={() => handlePersonDelete(person.id)}
      >
        &times;
      </button>
    </>
  );
}
