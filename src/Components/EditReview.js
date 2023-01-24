import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function EditReview({ onUpdateReview, itemId }) {
    const [itemRating, setItemRating] = useState(10)
    const [review, setReview] = useState("")


    // add exit edit button, use a large X button if available

    const handleRating = (e) => {
        setItemRating(e.target.value)
    };

    function handleEditReview(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/reviews/${itemId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: review,
                item_rating: itemRating,
                item_id: itemId
            }),
          })
            .then((r) => r.json())
            .then((updatedReview) => onUpdateReview(updatedReview));
        
    }


    return (
        <Box>
            <FormControl>
                <p>Edit Review</p>
                <TextField onChange={(e) => setReview(e.target.value)}></TextField>
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