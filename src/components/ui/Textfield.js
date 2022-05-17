import React from "react";

export default function TextField(props) {
  const { id, name, label, value, onChange, error } = props;
  return (
    <>
      <label htmlFor={name} className="recipe-edit__label">
        {label}
      </label>
      {/* <div className="textfield"> */}
      <input
        id={id}
        name={name}
        type="text"
        className={"recipe-edit__input " + (error ? "error" : "")}
        value={value}
        onChange={onChange}
      />

      <span className="error">
        {error && error.constrains.map((fieldError) => fieldError)}
      </span>
      {/* </div> */}
    </>
  );
}
