import React, { Component } from "react";

class ClassBottonArguments extends Component {
  clickMe(event) {
    alert(event);
  }
  render() {
    return (
      <div>
        <h2 className="h2Btn">This Botton Create From Class Component</h2>
        <botton
          className="Btn"
          onClick={this.clickMe.bind(
            this,
            "I am From Class Component Paramitar"
          )}
        >
          Click Class Component
        </botton>
      </div>
    );
  }
}
export default ClassBottonArguments;
