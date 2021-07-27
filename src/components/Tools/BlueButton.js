import React from "react";

export default function BlueButton({ text, click }) {
  return (
    <span className="Transfer TransferBTN ms-Button ms-Button--primary">
      <span onClick={() => click()} className="transfersavetext">        
        {text}
      </span>
    </span>
  );
}