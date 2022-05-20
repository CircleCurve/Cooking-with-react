import React from "react";

export default function TextField(props) {
  const {
    id,
    name,
    label,
    value,
    onChange,
    error,
    showLabel = true,
    showInput = true,
    showError = true,
  } = props;

  return (
    <>
      {showLabel && (
        <label htmlFor={name} className="recipe-edit__label">
          {label}
        </label>
      )}
      {/* <div className="textfield"> */}
      {showInput && (
        <input
          id={id}
          name={name}
          type="text"
          className={"recipe-edit__input " + (error ? "error" : "")}
          value={value}
          onChange={onChange}
        />
      )}

      {showError && (
        <span className="error">
          {error && error.constrains.map((fieldError) => fieldError)}
        </span>
      )}
      {/* </div> */}
    </>
  );
}
