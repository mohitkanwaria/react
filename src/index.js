import React from "react";
import ReactDOM from "react-dom";

const fname = "Mohit";
const lname = "Kanwaria";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>My name is {fname + " " + lname} </h1>
    <p>copyright {year}</p>
  </div>,
  document.getElementById("root")
);
