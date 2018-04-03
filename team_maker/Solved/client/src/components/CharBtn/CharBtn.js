import React from "react";
import "./CharBtn.css"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

const CharBtn = props => (
  <button className="hero-btn">
    {props.name}
    {props.id}
  </button>
);

export default CharBtn;
