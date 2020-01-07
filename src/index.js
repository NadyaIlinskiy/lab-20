import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.js";
import "./styles.css";

function App() {
  return (
    <div>
      <h1>Your Name Form</h1>
      <Form />
      <p>
        Sorry for crappy styling. Running out of time. <br />
      </p>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
