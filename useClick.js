import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useClick = (onClick) => {
  if(typeof onClick !== "function") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    // useClick mount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // useClick unmount - Will Component Unmount
    // return a function that is called WillComponent Unmount.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
