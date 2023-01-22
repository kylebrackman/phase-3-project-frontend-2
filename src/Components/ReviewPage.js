import React from "react";
//import ReviewSubmissionForm from "./ReviewSubmissionForm";
import ItemCard from "./ItemCard";

// Mui Styles Below
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function ReviewPage({ items, reviews, setReviews, setItems, handleAddReview }) {


    function handleDeleteItem(id) {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
    }

    const itemCards = items.map(item => {
        return (
            <ItemCard
                key={item.id}
                itemId={item.id}
                handleDeleteItem={handleDeleteItem}
                handleAddReview={handleAddReview}
                itemReviews={item.reviews}
                itemName={item.item_name}
                itemType={item.item_type}
                reviews={reviews}
                setReviews={setReviews}
                setItems={setItems}
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
