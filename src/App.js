import { useState } from "react";
import "./styles.css";

export default function App() {
  const [player, changeTurn] = useState("red");

  function changePlayerTurn() {
    if (player === "red") {
      changeTurn("yellow");
    } else {
      changeTurn("red");
    }
  }

  return (
    <div className="App">
      <div className="blue" onClick={changePlayerTurn}>
        <div className={`slot ${player}`}></div>
      </div>
      Le Player Turn has changed
    </div>
  );
}
