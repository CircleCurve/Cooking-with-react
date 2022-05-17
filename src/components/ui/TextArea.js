import React from "react";

export default function TextArea(props) {
  const { id, name, label, value, onChange, error } = props;
  return (
    <>
      <label htmlFor={name} className="recipe-edit__label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={"recipe-edit__input " + (error ? "error" : "")}
        value={value}
        onChange={onChange}
      />
      <span className="error">
        {error && error.constrains.map((fieldError) => fieldError)}
      </span>
    </>
  );
}
