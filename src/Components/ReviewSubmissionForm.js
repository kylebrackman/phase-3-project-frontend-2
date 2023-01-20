import React from "react";


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function ReviewSubmissionForm( {handleAddReview} ) {


    return (
        <Box>
            <p>Name:</p>
            <TextField></TextField>
            <br />
            <p>Review</p>
            <TextField></TextField>
        </Box>
    )
}

export default ReviewSubmissionForm