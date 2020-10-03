import React, { useState } from "react";
import "./styles.css";

import KpButton from "../../components/KpButton";

function Keyboard() {
  return (
    <main>
      <div className="content">
        <div id="screen">
          <h1>Screen</h1>
        </div>
        <div id="keyboard">
          <div className="row">
            <div className="col-sm">
              <KpButton digits="1" />
            </div>
            <div className="col-sm">
              <KpButton digits="abc" />
            </div>
            <div className="col-sm">
              <KpButton digits="def" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <KpButton digits="ghi" />
            </div>
            <div className="col-sm">
              <KpButton digits="jkl" />
            </div>
            <div className="col-sm">
              <KpButton digits="mno" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <KpButton digits="pqrs" />
            </div>
            <div className="col-sm">
              <KpButton digits="tuv" />
            </div>
            <div className="col-sm">
              <KpButton digits="wxyz" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <KpButton digits="*" />
            </div>
            <div className="col-sm">
              <KpButton digits="0" />
            </div>
            <div className="col-sm">
              <KpButton digits="#" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Keyboard;
