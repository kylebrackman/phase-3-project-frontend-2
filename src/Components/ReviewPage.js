import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";



function ReviewPage({ items, handleDeleteItems }) {
    const [itemReviews, setItemReviews] = useState([])

    function handleDeleteItem(id) {
        const updatedItems = items.filter(item => item.id !== id)
        handleDeleteItems(updatedItems)
    }
    

    useEffect(() => {
        fetch("http://localhost:9292/reviews")
          .then(res => res.json())
          .then(data => {
            setItemReviews(data)
          })
      }, [])

    const itemCards = items.map(item => {
        return (
            <ItemCard
                key={item.id}
                itemId={item.id}
                handleDeleteItem={handleDeleteItem}
                itemReviews={itemReviews}
                itemName={item.item_name}
                itemType={item.item_type}
                reviews={itemReviews}
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
