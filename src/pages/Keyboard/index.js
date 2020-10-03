import React, { useState, useEffect } from "react";
import "./styles.css";

import KpButton from "../../components/KpButton";

import api from "../../service/api";

const Keyboard = () => {
  const [textBox, setText] = useState("");
  const [screenText, setScreenText] = useState("");

  function handleClick(digit) {
    if (textBox.length >= 4) {
      return;
    }
    setText(textBox + digit);
  }

  function handleEnter() {
    api.post("/", { number: textBox }).then((response) => {
      const { number } = response.data;

      if (number === null) {
        setScreenText(screenText + "");
        setText("");
        return;
      }
      setScreenText(screenText + number);
      setText("");
    });
  }
  return (
    <main>
      <div className="content">
        <div id="screen">
          <h1>Screen</h1>
          <h2>{screenText}</h2>
          <h2>{textBox}</h2>
        </div>
        <div id="keyboard">
          <div className="row">
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("1")} digits="1" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("2")} digits="abc" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("3")} digits="def" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("4")} digits="ghi" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("5")} digits="jkl" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("6")} digits="mno" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("7")} digits="pqrs" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("8")} digits="tuv" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("9")} digits="wxyz" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("*")} digits="*" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("0")} digits="0" />
            </div>
            <div className="col-sm">
              <KpButton handleClick={() => handleClick("#")} digits="#" />
            </div>
          </div>
          <button onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </main>
  );
};

export default Keyboard;
