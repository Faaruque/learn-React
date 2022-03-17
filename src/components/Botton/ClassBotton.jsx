import React, { Component } from "react";

class ClassBotton extends Component {
  clickMe() {
    alert("Botton Is Click !!!");
  }
  render() {
    return (
      <div>
        <h2 className="h2Btn">This Botton Create From Class Component</h2>
        <botton className="Btn" onClick={this.clickMe}>
          Click Class Component
        </botton>
      </div>
    );
  }
}
export default ClassBotton;
