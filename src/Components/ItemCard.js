import React, { useState } from "react";
import ReviewSubmissionForm from "./ReviewSubmissionForm";


// Mui Styles Below
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';



function ItemCard({ itemId, itemReviews, itemName, itemType, handleDeleteItem }) {

    const [revOpen, setRevOpen] = useState(false)
    const [subsOpen, setSubsOpen] = useState(false)
    const [displayedReviews, setDisplayedReviews] = useState(itemReviews)

    function handleRevSubOpenClose() {
        setSubsOpen(!subsOpen);
    };
    function handleAddReview(newReview) {
        setDisplayedReviews([...displayedReviews, newReview])
    }

    function onDeleteItem(id) {
        fetch(`http://localhost:9292/items/${id}`, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(id))
    }

    const handleReviewOpenClose = () => {
        setRevOpen(!revOpen);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ margin: 4 }}>
            <Item >
                <DeleteIcon onClick={() => onDeleteItem(itemId)}></DeleteIcon>
                <p>Product Name: {itemName}</p>
                <p>Product Type: {itemType}</p>
                <br />
                <ListItemButton onClick={handleReviewOpenClose}>
                    <ListItemIcon>
                        <ReviewsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reviews" />
                    {revOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={revOpen} timeout="auto" unmountOnExit>
                    {
                        displayedReviews.map(i => {
                            return (
                                <p key={i.id}>
                                    {i.reviewer_name}: {i.review} <br />
                                    Rating: {i.item_rating}
                                </p>
                            )
                        })
                    }
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
            </Item>
        </Box>
    )
}

export default ItemCard
