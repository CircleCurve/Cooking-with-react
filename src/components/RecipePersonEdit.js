import React from "react";

export default function RecipePersonEdit(props) {
  const { person } = props;
  return (
    <>
      <input type="text" value={person.name} />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
