// update the title of your document using useEffect.

import React, { useEffect, useState, } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// update the title in 5 seconds to "Home".

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(()=> titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
