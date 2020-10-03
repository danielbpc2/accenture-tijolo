import React from "react";
import "./style.css";

function KpButton(props) {
  return (
    <button className="keyboard-key" onClick={props.handleClick}>
      {props.digits}
    </button>
  );
}

export default KpButton;
