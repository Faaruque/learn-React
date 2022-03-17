import React from "react";

function FuntionalComponents(props) {
  const { name, age, desc } = props;
  return (
    <h1>
      Hello Mr. {name}. <br />
      Age:{age}
      <br />
      He Is A {desc}
    </h1>
  );
}
export default FuntionalComponents;
