import React from "react";
import "./Panel.css"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

const Panel = props =>{
  console.log("props",props);
  return(
    <div id="panel">
      <h1>{props.children}</h1>
    </div>
  );
} 

export default Panel


