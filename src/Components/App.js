import '../App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";


import NavBar from "./NavBar"
import ReviewPage from './ReviewPage';
import Submissions from './Submissions'


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/items")
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  function handleDeleteItem(id) {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem])
  }

  function updateItem(newItem) {
    const updatedItems = items.map(item => {
      if (item.id === newItem.id) {
        return newItem;
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div>``
      <NavBar />
      <Routes>
        <Route path="/reviews" element={<ReviewPage items={items} handleDeleteItem={handleDeleteItem} updateItem={updateItem}/>} />
        <Route path="/submissions" element={<Submissions onAddItem={handleAddItem} />} />
      </Routes>
    </div>
  );
}

export default App;
