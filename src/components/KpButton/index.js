import React from "react";

function KpButton(props) {
  return <button onClick={props.handleClick}>{props.digits}</button>;
}

export default KpButton;
