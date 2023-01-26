import React, { useState } from "react";

import { TextField, Select, MenuItem, FormControl, Button, Box } from "@mui/material";

function EditReview({ review, onUpdateReview, itemId, toggleEdit }) {
    const [itemRating, setItemRating] = useState(10)
    const [reviewText, setReviewText] = useState("")


    const handleRating = (e) => {
        setItemRating(e.target.value)
    };



    function handleEditReview(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: reviewText,
                item_rating: itemRating,
                item_id: itemId
            }),
        })
            .then((r) => r.json())
            .then((updatedReview) => onUpdateReview(updatedReview))
            .then(toggleEdit)
    }

    return (
        <Box key={review.id}>
            <FormControl key={review.id}>
                <p>Edit Review</p>
                <TextField onChange={(e) => setReviewText(e.target.value)}></TextField>
                <br />
                <p>Edit Rating 1-10</p>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={itemRating} label="" onChange={handleRating} >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>3</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                <Button variant="outlined" onClick={handleEditReview}>Submit Edits!</Button>
            </FormControl>
        </Box>
    )

}




export default EditReview