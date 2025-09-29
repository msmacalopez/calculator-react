import React from "react";
import buttons from "../buttons.js";
import BtnItem from "./BtnItem.jsx";

export default function CalculatorBody({ calculateDisplay }) {
  const allButtons = buttons.map((item, index) => {
    return (
      <BtnItem
        key={item.content}
        content={item.content}
        special={item.btnSpecial}
        calculateDisplay={calculateDisplay}
      />
    );
  });
  return (
    <div className="btn-body">
      {/* <div className="btn btn-special">AC</div> */}
      {allButtons}
    </div>
  );
}
