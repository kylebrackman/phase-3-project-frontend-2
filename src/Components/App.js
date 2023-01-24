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

  function handleDeleteItems(updatedItemsList) {
    setItems(updatedItemsList)
  }

  function handleAddItem(newItem){
    setItems([...items, newItem])
  }


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/reviews" element={<ReviewPage items={items} handleDeleteItems={handleDeleteItems} />} />
        <Route path="/submissions" element={<Submissions onAddItem={handleAddItem}/>} />
      </Routes>
    </div>
  );
}

export default App;
