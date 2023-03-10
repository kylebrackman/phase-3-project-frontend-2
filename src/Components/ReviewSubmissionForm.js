import React, { useState } from "react";

import { TextField, Select, MenuItem, FormControl, Button, Box } from "@mui/material";


function ReviewSubmissionForm({ handleAddReview, itemId }) {
    const [review, setReview] = useState("")
    const [itemRating, setItemRating] = useState(10)
    const [reviewerName, setReviewerName] = useState("")

    function onAddReview(e) {
        e.preventDefault();

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: review,
                item_rating: itemRating,
                reviewer_name: reviewerName,
                item_id: itemId
            })
        })
            .then((r) => r.json())
            .then((newReview) => {
                handleAddReview(newReview)
                setReview("")
                setItemRating(10)
                setReviewerName("")
            })
    }


    const handleRating = (e) => {
        setItemRating(e.target.value);
    };

    return (
        <Box key={itemId}>
            <FormControl>
                <p>Name:</p>
                <TextField onChange={(e) => setReviewerName(e.target.value)}></TextField>
                <br />
                <p>Review</p>
                <TextField onChange={(e) => setReview(e.target.value)}></TextField>
                <br />
                <p>Rating 1-10</p>
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
                <Button variant="outlined" onClick={onAddReview}>Submit!</Button>
            </FormControl>
        </Box>
    )
}

export default ReviewSubmissionForm