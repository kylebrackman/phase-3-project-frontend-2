import React, { useState } from "react";
//import ReviewSubmissionForm from "./ReviewSubmissionForm";
import ItemCard from "./ItemCard";

// Mui Styles Below
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function ReviewPage({ itemsInput, reviews }) {

    const [items, setItems] = useState(itemsInput)


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
                review={reviews.review}
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

    // const itemList = items.map(item => {
    //     return (
    //         <Box key={item.id} sx={{ margin: 4, flexGrow: 1 }} >
    //             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} >
    //                 <Grid item xs={4}>
    //                     <Item >
    //                         <DeleteIcon onClick={() => onDeleteItem(item.id)}></DeleteIcon> <br />
    //                         Product Name: {item.item_name} <br />
    //                         Product Type: {item.item_type} <br />
    //                         <ListItemButton onClick={handleReviewOpenClose}>
    //                             <ListItemIcon>
    //                                 <ReviewsIcon />
    //                             </ListItemIcon>
    //                             <ListItemText primary="Reviews" />
    //                             {revOpen ? <ExpandLess /> : <ExpandMore />}
    //                         </ListItemButton>
    //                         <Collapse in={revOpen} timeout="auto" unmountOnExit>
    //                             {reviewsNew.map(i => {
    //                                 return (
    //                                     <p key={i.id}>
    //                                         {i.reviewer_name}: {i.review} <br />
    //                                         Rating: {i.item_rating}
    //                                     </p>
    //                                 )
    //                             })}
    //                         </Collapse>
    //                         <ListItemButton onClick={handleRevSubOpenClose}>
    //                             <BorderColorIcon sx={{ paddingRight: 4 }}>
    //                                 <ReviewsIcon />
    //                             </BorderColorIcon>
    //                             <ListItemText primary="Submit a New Review!" />
    //                             {subsOpen ? <ExpandLess /> : <ExpandMore />}
    //                         </ListItemButton>
    //                         <Collapse in={subsOpen} timeout="auto" unmountOnExit>
    //                             <ReviewSubmissionForm handleAddReview={handleAddReviewNew} reviews={reviews} itemId={item.id} />
    //                         </Collapse>
    //                     </Item>
    //                 </Grid>
    //             </Grid>
    //         </Box>
    //     )
    // })