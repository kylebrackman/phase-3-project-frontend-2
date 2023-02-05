import React from "react";
import ItemCard from "./ItemCard";

import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";



function ReviewPage({ items, handleDeleteItem, handleAddReviewToItem, updateItem }) {

    const itemCards = items.map(item => {
        return (
            <ItemCard
                item={item}
                key={item.id}
                handleDeleteItem={handleDeleteItem}
                handleAddReviewToItem={handleAddReviewToItem}
                updateItem={updateItem}
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
