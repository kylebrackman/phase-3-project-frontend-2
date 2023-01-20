import React, { useState } from "react";
import ReviewSubmissionForm from "./ReviewSubmissionForm";

// Mui Styles Below
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { alignProperty } from "@mui/material/styles/cssUtils";
import ReviewsIcon from '@mui/icons-material/Reviews';


// import Stack from '@mui/material/Stack';

function ReviewPage({ items, handleDeleteItem }) {
    const [revOpen, setRevOpen] = useState(true)
    const [subsOpen, setSubsOpen] = useState(true)


    const handleReviewOpenClose = () => {
        setRevOpen(!revOpen);
    };

    const handleRevSubOpenClose = () => {
        setSubsOpen(!subsOpen);
    };


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    function onDeleteItem(id) {
        fetch(`http://localhost:9292/items/${id}`, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(id))
    }


    const itemList = items.map(item => {
        return (
            <Box key={item.id} sx={{ margin: 4, flexGrow: 1 }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} >
                    <Grid item xs={4}>
                        <Item >
                            <DeleteIcon onClick={() => onDeleteItem(item.id)}></DeleteIcon> <br />
                            Product Name: {item.item_name} <br />
                            Product Type: {item.item_type} <br />
                            <ListItemButton onClick={handleReviewOpenClose}>
                                <ListItemIcon>
                                    <ReviewsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Reviews" />
                                {revOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={revOpen} timeout="auto" unmountOnExit>
                                {item.reviews.map(i => {
                                    return (
                                        <p>
                                            {i.reviewer_name}: {i.review}
                                            <br />
                                            Rating: {i.item_rating}
                                        </p> 
            
                                    )
                                })}
                            </Collapse>
                            <ListItemButton onClick={handleRevSubOpenClose}>
                                <ListItemIcon>
                                    <ReviewsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Submit a New Review!" />
                                {subsOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={subsOpen} timeout="auto" unmountOnExit>
                                <ReviewSubmissionForm />
                            </Collapse>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        )
    })

    return (
        <Grid sx={{ margin: 4, flexGrow: 1 }}>
            {itemList}
        </Grid>
    )
}

export default ReviewPage