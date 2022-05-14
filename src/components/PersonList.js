import React from "react";
import Person from "./Person";

export default function PersonList({ persons }) {
  const personElements = persons.map((person) => (
    <Person key={person._id} {...person} />
  ));
  return <div className="person-grid">{personElements}</div>;
}
