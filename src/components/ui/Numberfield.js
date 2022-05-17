import React from "react";

export default function Numberfield(props) {
  const { id, name, min, value, onChange, error } = props;
  return (
    <div className="textfield">
      <input
        id={id}
        name={name}
        type="number"
        min={min}
        className={"recipe-edit__input " + (error ? "error" : "")}
        value={value}
        onChange={onChange}
      />
      {error && (
        <span className="error">
          {error.constrains.map((fieldError) => fieldError)}
        </span>
      )}
    </div>
  );
}
