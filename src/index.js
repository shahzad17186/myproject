import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Hello from "./Hello";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <App
      name="Muhammad Asif Shahzad"
      age={34}
      option={{ yes: "React Developer", no: "Python Developer" }}
    />
  </div>,
  document.getElementById("root")
);
/*to provide age as character  age="34" */
/*span inside a div 
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement("span", null, "here is span inside the div component")
  ),
  document.getElementById("root")
);*/
/*
ReactDOM.render(
  React.createElement("div", null, "Hello g how are you and how am doing?"),
  document.getElementById("root")
);*/
/*Both are doing the same thing */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
