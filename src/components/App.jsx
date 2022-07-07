import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((value, index) => {
        return index !== id
      })
    });
      
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
      {items.map((item, index) => (
        <Todolist 
        key={index}
        id={index}
        items={item}
        delete={deleteItem}
        />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
