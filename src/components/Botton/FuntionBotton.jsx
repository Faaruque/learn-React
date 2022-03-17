import React from "react";
function FuntionBotton() {
  function clickMe() {
    alert("Botton Is Click !!!");
  }
  return (
    <div>
      <h2 className="h2Btn">This Botton Create From Funtional Component</h2>
      <botton className="Btn" onClick={clickMe}>
        Click Funtion Component
      </botton>
    </div>
  );
}
export default FuntionBotton;
