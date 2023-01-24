import React, { useState } from "react";
import ReviewSubmissionForm from "./ReviewSubmissionForm";
import EditReview from "./EditReview";
import DisplayedReviewsComp from "./DisplayedReviewsComp";


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



function ItemCard({
    itemId,
    itemReviews,
    itemName,
    itemType,
    handleDeleteItem,
    onUpdateReview,
    reviews
}) {

    const [revOpen, setRevOpen] = useState(false)
    const [subsOpen, setSubsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
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

    function beginEdit() {
        setIsEditing(true)
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ margin: 4 }} >
            <Item >
                <p style={{fontSize:20}}>{itemName}</p>
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
                        <EditReview displayedReviews={displayedReviews} onUpdateReview={onUpdateReview} itemId={itemId}/>)
                        : (
                            <DisplayedReviewsComp
                                displayedReviews={displayedReviews}
                                beginEdit={beginEdit}
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
