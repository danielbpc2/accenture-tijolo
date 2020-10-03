import React from "react";
import "./styles.css";

import KpButton from "../../components/KpButton";

function Keyboard() {
  return (
    <main>
      <div className="content">
        <div id="keyboard">
          <table>
            <tbody>
              <tr>
                <td>
                  <KpButton digits="1" />
                </td>
                <td>
                  <KpButton digits="abc" />
                </td>
                <td>
                  <KpButton digits="def" />
                </td>
              </tr>
              <tr>
                <td>
                  <KpButton digits="ghi" />
                </td>
                <td>
                  <KpButton digits="jkl" />
                </td>
                <td>
                  <KpButton digits="mno" />
                </td>
              </tr>
              <tr>
                <td>
                  <KpButton digits="tuv" />
                </td>
                <td>
                  <KpButton digits="wxyz" />
                </td>
                <td>
                  <KpButton digits="pqrs" />
                </td>
              </tr>
              <tr>
                <td>
                  <KpButton digits="*" />
                </td>
                <td>
                  <KpButton digits="0" />
                </td>
                <td>
                  <KpButton digits="#" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Keyboard;
