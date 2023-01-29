import React from "react";
import ItemCard from "./ItemCard";

import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";



function ReviewPage({ items, handleDeleteItems }) {

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
        <Stack sx={{alignItems: "center"}}>
            <Box key={items.id} sx={{ paddingTop: 10, alignItems: "center" }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{}} >
                    <Grid item xs={4}></Grid>
                    {itemCards}
                </Grid>
            </Box >
        </Stack>
    )
}

export default ReviewPage
