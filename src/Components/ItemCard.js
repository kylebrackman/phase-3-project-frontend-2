import React, { useState } from "react";
import ReviewSubmissionForm from "./ReviewSubmissionForm";
import EditReview from "./EditReview";
import DisplayedReviewsComp from "./DisplayedReviewsComp";


// Mui Styles Below
import { styled } from '@mui/material/styles';
import { Paper, ListItemButton, ListItemIcon, ListItemText, Collapse, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BorderColorIcon from '@mui/icons-material/BorderColor';



function ItemCard({ itemId, itemReviews, itemName, itemType, handleDeleteItem }) {

    const [revOpen, setRevOpen] = useState(false)
    const [subsOpen, setSubsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [displayedReviews, setDisplayedReviews] = useState(itemReviews)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function toggleEdit() {
        setIsEditing(!isEditing)
    };

    function handleRevSubOpenClose() {
        setSubsOpen(!subsOpen);
    };

    function handleAddReview(newReview) {
        setDisplayedReviews([...displayedReviews, newReview])
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
        const updatedReviews = displayedReviews.map(review => {
            if (review.id === updatedReviewObj.id) {
                return updatedReviewObj
            } else {
                return review;
            }
        })
        setDisplayedReviews(updatedReviews)
    }

    return (
        <Box sx={{ margin: 4 }} >
            <Item >
                <p style={{ fontSize: 20, color: "black" }}>{itemName}</p>
                <p>Type: {itemType}</p>
                <ListItemButton onClick={handleReviewOpenClose}>
                    <ListItemIcon>
                        <ReviewsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reviews" />
                    {revOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={revOpen} timeout="auto" unmountOnExit>
                    {isEditing ? (
                        <EditReview
                            displayedReviews={displayedReviews}
                            onUpdateReview={handleUpdateReview}
                            itemId={itemId}
                            toggleEdit={toggleEdit} />
                    ) : (
                        <DisplayedReviewsComp
                            displayedReviews={displayedReviews}
                            toggleEdit={toggleEdit}
                            itemId={itemId}
                        />
                    )}
                </Collapse>

                <ListItemButton onClick={handleRevSubOpenClose}>
                    <BorderColorIcon sx={{ paddingRight: 4 }}>
                        <ReviewsIcon />
                    </BorderColorIcon>
                    <ListItemText primary="Submit a New Review!" />
                    {subsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={subsOpen} timeout="auto" unmountOnExit>
                    <ReviewSubmissionForm handleAddReview={handleAddReview} itemId={itemId} />
                </Collapse>
                <p>Delete Item</p>
                <DeleteIcon onClick={() => onDeleteItem(itemId)}></DeleteIcon>
            </Item>
        </Box>
    )
}

export default ItemCard
