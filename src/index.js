import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";

ReactDOM.render(
  <React.StricMode>
    <Nav />
    <App />
  </React.StricMode>,
  document.querySelector("#root")
);
