import React, { useState } from "react";
import Display from "./Display";
import CalculatorBody from "./CalculatorBody";

export default function Calculator() {
  // global element
  const operatorList = ["+", "*", "/", "-", "%"];
  const numberList = "1234567890=";
  const [output, setOutput] = useState("0.0");
  const [lastCharacter, setLastCharacter] = useState("");
  const [lastOperator, setLastOperator] = useState("+");

  function calculateDisplay(pressedBtn) {
    //change operator to use eval later
    if (pressedBtn == "x") {
      pressedBtn = "*";
    }
    //Check all options
    if (pressedBtn == "=") {
      setOutput((prevOutput) => eval(prevOutput)?.toString());
    } else if (pressedBtn == "AC") {
      setOutput(" ");
    } else if (pressedBtn == "C") {
      setOutput((prevOutput) => prevOutput.slice(0, -1));
    }
    //all the rest... concatenate
    else {
      setOutput((prevOutput) => prevOutput + pressedBtn);
    }
  }

  return (
    <div className="calc-body">
      <div className="cutout"></div>
      <Display output={output} />
      <CalculatorBody calculateDisplay={calculateDisplay} />
    </div>
  );
}
