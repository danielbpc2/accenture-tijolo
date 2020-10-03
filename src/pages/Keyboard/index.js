import React, { useState } from "react";
import "./styles.css";

import KpButton from "../../components/KpButton";

import api from "../../service/api";

import { TiBackspaceOutline } from "react-icons/ti";
import { MdSpaceBar } from "react-icons/md";
import { GrPhone } from "react-icons/gr";

const Keyboard = () => {
  const [textBox, setTextBox] = useState("");
  const [screenText, setScreenText] = useState("");

  function handleClick(digit) {
    if (textBox.length >= 4) {
      return;
    }
    setTextBox(textBox + digit);
  }

  function handleEnter() {
    api.post("/", { number: textBox }).then((response) => {
      const { number } = response.data;

      if (number === null) {
        setScreenText(screenText + "");
        setTextBox("");
        return;
      }
      setScreenText(screenText + number);
      setTextBox("");
    });
  }

  function handleBackspace() {
    const erasedText = textBox.substring(0, textBox.length - 1);
    setTextBox(erasedText);
  }

  function handleBackspaceScreen() {
    const erasedText = screenText.substring(0, screenText.length - 1);
    setScreenText(erasedText);
  }

  return (
    <main>
      <div className="content">
        <div id="screen">
          <h2>{screenText}</h2>
          <h2>{textBox}</h2>
        </div>
        <div id="keyboard">
          <div className="keys">
            <div className="erase-buttons">
              <button className="keyboard-key" onClick={handleBackspaceScreen}>
                C
              </button>
              <button className="keyboard-key" onClick={handleBackspace}>
                <TiBackspaceOutline />
              </button>
            </div>
            <div className="row">
              <div className="col-xs">
                <KpButton
                  handleClick={() => handleClick("1")}
                  digits={<GrPhone />}
                />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("2")} digits="abc" />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("3")} digits="def" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("4")} digits="ghi" />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("5")} digits="jkl" />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("6")} digits="mno" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("7")} digits="pqrs" />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("8")} digits="tuv" />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("9")} digits="wxyz" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("*")} digits="*" />
              </div>
              <div className="col-xs">
                <KpButton
                  handleClick={() => handleClick("0")}
                  digits={<MdSpaceBar />}
                />
              </div>
              <div className="col-xs">
                <KpButton handleClick={() => handleClick("#")} digits="#" />
              </div>
            </div>
            <button className="keyboard-key" onClick={handleEnter}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Keyboard;
