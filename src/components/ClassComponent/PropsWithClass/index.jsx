import React, { Component } from "react";
class ClassComponents extends Component {
  render() {
    const tittle = this.props.tittle;
    return (
      <div className="container">
        <h2>{tittle}</h2>
        <p>{this.props.tittleDesc}</p>
      </div>
    );
  }
}
export default ClassComponents;
