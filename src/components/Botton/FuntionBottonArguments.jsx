import React from "react";
function FuntionBottonArguments() {
  function clickMe(event) {
    alert(event);
  }
  return (
    <div>
      <h2 className="h2Btn">This Botton Create From Funtional Component</h2>
      <botton
        className="Btn"
        onClick={clickMe.bind(this, "I am Frome Funtion Components Arguments")}
      >
        Click Funtion Component
      </botton>
    </div>
  );
}
export default FuntionBottonArguments;
