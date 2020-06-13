import React from "react";
import "./Hello.css";

function Hello({ fname }) {
  return (
    <p className="myname">This is another para in Hello Tag form {fname}</p>
  );
}
/*function App(props) {
  return (
    <div>
      Hello World from App.js with {props.name} and his age is {props.age - 5}
      and he is a {props.option.yes}
    </div>
  );
}*/

export default Hello;
