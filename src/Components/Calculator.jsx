import React, { useState } from "react";
import Display from "./Display";
import CalculatorBody from "./CalculatorBody";
import BtnItem from "./BtnItem";

export default function Calculator() {
  // global element
  const operatorList = ["+", "*", "/", "-", "%"];
  const numberList = "1234567890=";
  // state variables
  const [output, setOutput] = useState("0.0");
  const [lastCharacter, setLastCharacter] = useState("");
  const [lastOperator, setLastOperator] = useState("+");

  function calculateDisplay(pressedBtn) {
    //for beggining check
    if (output == "0.0") {
      setOutput("");
    }
    //to clean for next calculation
    if (lastCharacter == "=") {
      setOutput("");
    }
    if (pressedBtn == "x") {
      //change operator to use eval later
      pressedBtn = "*";
    }
    //Check all options
    if (pressedBtn == "=") {
      setOutput((prevOutput) => eval(prevOutput)?.toString());
    } else if (pressedBtn == "AC") {
      setOutput("");
    } else if (pressedBtn == "C") {
      setOutput((prevOutput) => prevOutput.slice(0, -1));
    }
    //all the rest... concatenate
    else {
      // 1) check if pressedBtn is MathOperator and also if lastChar-notUpdated is MathOperator
      if (
        operatorList.includes(pressedBtn) &&
        operatorList.includes(lastCharacter)
      ) {
        //then delete the lastChar
        setOutput((prevOutput) => prevOutput.slice(0, -1));
      }

      //2) Check if decimal point was pressed again
      if (pressedBtn == ".") {
        let outputArray = output.toString().split(lastOperator);
        let lastNumber = outputArray[outputArray.length - 1];
        if (lastNumber.includes(".")) {
          return; //leave the execution
        }
      }

      // Final) After all checkings--> concatenate and show output
      setOutput((prevOutput) => prevOutput + pressedBtn);
    }
    //outside the else--> otherwise doesn't record propertly the LastChar and lastOpe
    // Update 1) Update lastCHar
    let tempChar = pressedBtn;
    setLastCharacter(tempChar);
    // console.log(lastCharacter);

    // Update 2) Update last Operator
    if (operatorList.includes(pressedBtn)) {
      let temp = pressedBtn;
      setLastOperator(temp);
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
