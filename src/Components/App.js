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

  function handleAddItem(newItem){
    setItems([...items, newItem])
  }

  function handleSetItems(updatedItems) {
    setItems([...items, updatedItems])
  }

// create function "addReviewToItem"
// same thing for deleting a review, use 'setItems'
// how do i create a function that adds a review to item, while using setItems?
  function handleSetItem(newItem) {
    const newItemList = items.filter(i => i.id !== newItem.id)
    setItems([...newItemList, newItem])
  }

  function handleDeleteReviewFromItem(item, reviewId) {
    console.log(item)
    const newReviews = item.reviews.filter(r => reviewId !== r.id)
    console.log(item)
    const newItem = {...item, reviews: newReviews}
    handleSetItem(newItem)
  }


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/reviews" element={<ReviewPage items={items} handleDeleteItem={handleDeleteItem} handleSetItems={handleSetItems} handleDeleteReviewFromItem={handleDeleteReviewFromItem} handleSetItem={handleSetItem}/>} />
        <Route path="/submissions" element={<Submissions onAddItem={handleAddItem}/>} />
      </Routes>
    </div>
  );
}

export default App;
