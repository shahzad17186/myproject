import React from "react";
/*import logo from "./logo.svg";*/
import "./App.css";
import Hello from "./Hello";

function App({ name, age, option }) {
  return (
    <div>
      Hello World from App.js with {name} and his age is {age - 5}
      and he is a {option.no}
      <br></br>
      <Hello fname={name}></Hello>
    </div>
  );
}
/*function App(props) {
  return (
    <div>
      Hello World from App.js with {props.name} and his age is {props.age - 5}
      and he is a {props.option.yes}
      <br />
      <Hello></Hello>
    </div>
  );
}*/

export default App;
