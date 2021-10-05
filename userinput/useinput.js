import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Add Validator so that what they type is validated.

const userInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    // willUpdate will remain true unless conditional statements change the status.
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// default input will be default.
// maxLen will check whether the value inside the input has a length less than 10.
// it checks everytime the users put in values like refreshing of a page.

export default function App() {

  // maxLen will validate the value inside the input.
  const maxLen = (value) => value.length <= 10;
  // optionally: const maxLen = valuoe => !value.includes("@")

  const name = userInput("Default", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
