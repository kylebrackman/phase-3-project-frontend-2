import React, { useState } from "react";

import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


function EditReview({ onUpdateReview }) {

    // eslint-disable-next-line
    const [reviewBody, setReviewBody] = useState([])
    // add exit edit button, use a large X button if available
    return (
        <FormControl style={{alignItems: "center"}}>
            <p>Exit Editing <CancelPresentationOutlinedIcon /></p>
            
            <p>Edit Review</p>
            <TextField />
            <p>Edit Rating 1-10</p>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={""} label="Age" 
            >
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
        </FormControl>
    )
}

export default EditReview