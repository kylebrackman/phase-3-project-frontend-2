import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function ReviewPage({ items, handleDeleteItems }) {
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
        handleDeleteItems(updatedItems)
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
                reviews={item.reviews}
            />
        )
    })

    return (
        <Box key={items.id} sx={{ paddingTop:10, alignItems:"center", marginLeft: 20 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ }} >
                <Grid item xs={4}></Grid>
                {itemCards}
            </Grid>
        </Box >
    )
}

export default ReviewPage
