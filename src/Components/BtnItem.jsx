import React from "react";

export default function BtnItem({ content, special, calculateDisplay }) {
  return (
    <div
      onClick={() => calculateDisplay(content)}
      className={special ? "btn btn-special" : "btn"}
    >
      {content}
    </div>
  );
}
