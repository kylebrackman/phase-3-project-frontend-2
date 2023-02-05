import React, { useState } from "react";
import ReviewSubmissionForm from "./ReviewSubmissionForm";
import DisplayedReviewsComp from "./DisplayedReviewsComp";


// Mui Styles Below
import { styled } from '@mui/material/styles';
import { Paper, ListItemButton, ListItemIcon, ListItemText, Collapse, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BorderColorIcon from '@mui/icons-material/BorderColor';



function ItemCard({ item, handleDeleteItem, handleSetItems, updateItem, handleSetItem}) {

    const [revOpen, setRevOpen] = useState(false)
    const [subsOpen, setSubsOpen] = useState(false)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function handleDeleteReview(reviewId) {
        const updatedReviews = item.reviews.filter(rev => {
            return (rev.id !== reviewId)
        })
        item.reviews = updatedReviews
        updateItem(item)
    }

    function handleRevSubOpenClose() {
        setSubsOpen(!subsOpen);
    };

    function handleAddReview(newReview) {
        item.reviews = [...item.reviews, newReview]
        updateItem(item)
    };

    function handleReviewOpenClose() {
        setRevOpen(!revOpen);
    };

    function onDeleteItem(id) {
        fetch(`http://localhost:9292/items/${id}`, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(id))
    }

    function handleUpdateReview(updatedReviewObj) {
        const updatedReviews = item.reviews.map(review => {
            if (review.id === updatedReviewObj.id) {
                return updatedReviewObj
            } else {
                return review;
            }
        })
        item.reviews = updatedReviews
        updateItem(item)
    }

    return (
        <Box sx={{ margin: 4 }} >
            <Item >
                <p style={{ fontSize: 20, color: "black" }}>{item.item_name}</p>
                <p>Type: {item.item_type}</p>
                <ListItemButton onClick={handleReviewOpenClose}>
                    <ListItemIcon>
                        <ReviewsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reviews" />
                    {revOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={revOpen} timeout="auto" unmountOnExit>

                    <DisplayedReviewsComp
                        displayedReviews={item.reviews}
                        itemId={item.id}
                        onUpdateReview={handleUpdateReview}
                        handleDeleteReview={(review) => handleDeleteReview(review)}
                    />

                </Collapse>

                <ListItemButton onClick={handleRevSubOpenClose}>
                    <BorderColorIcon sx={{ paddingRight: 4 }}>
                        <ReviewsIcon />
                    </BorderColorIcon>
                    <ListItemText primary="Submit a New Review!" />
                    {subsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={subsOpen} timeout="auto" unmountOnExit>
                    <ReviewSubmissionForm handleAddReview={handleAddReview} itemId={item.id} />
                </Collapse>
                <p>Delete Item</p>
                <DeleteIcon onClick={() => onDeleteItem(item.id)}></DeleteIcon>
            </Item>
        </Box>
    )
}

export default ItemCard
