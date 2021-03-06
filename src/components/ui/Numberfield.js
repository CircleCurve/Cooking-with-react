import React from "react";

export default function NumberField(props) {
  const { id, name, label, min, value, onChange, error } = props;
  return (
    <>
      <label htmlFor={name} className="recipe-edit__label">
        {label}
      </label>
      {/* <div className="textfield"> */}
      <input
        id={id}
        name={name}
        type="number"
        min={min}
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
