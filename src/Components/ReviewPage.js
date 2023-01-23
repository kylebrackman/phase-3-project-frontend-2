import React, { useState, useEffect } from "react";
//import ReviewSubmissionForm from "./ReviewSubmissionForm";
import ItemCard from "./ItemCard";

// Mui Styles Below
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function ReviewPage({ items, handleUpdateItems }) {
    // eslint-disable-next-line
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    function handleDeleteItem(id) {
        const updatedItems = items.filter(item => item.id !== id)
        handleUpdateItems(updatedItems)
    }

    const itemCards = items.map(item => {
        return (
            <ItemCard
                key={item.id}
                itemId={item.id}
                handleDeleteItem={handleDeleteItem}
                itemReviews={item.reviews}
                itemName={item.item_name}
                itemType={item.item_type}
            />
        )
    })

    return (
        <Box key={items.id} sx={{ margin: 4, flexGrow: 1 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} >
                <Grid item xs={4}></Grid>
                {itemCards}
            </Grid>
        </Box >
    )
}

export default ReviewPage
