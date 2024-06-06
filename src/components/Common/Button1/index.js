import React from "react";
import "./styles.css";

function Button1({text, onClick, outlined}) {
  return (
    <div className= {outlined ? "outlined-btn" : "btn"} onClick={() => onClick()}>
     {text} 
    </div>
  );
}

export default Button1;
