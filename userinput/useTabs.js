import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Let's assume there is an API coming.

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {

  // error check for inputs: making sure that the input is an array.
  if (!allTabs || !Array.isArray(allTabs)){
    // kill the function.
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function App() {
  const {currentItem, changeItem } = useTabs(0, content);
  // create two buttons using map to iterate tabs.
  // Each iterated buttons contain index. When clicked, 
  // the index of an clicked button will change the item into the appropriate content.
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={()=> changeItem(index)}>{section.tab}</button>
      ))}
      <div>
      {currentItem.content}
      </div>
    </div>
  );
}
