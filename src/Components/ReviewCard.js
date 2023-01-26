import React, { useState } from "react";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';
import EditReview from "./EditReview";

function ReviewCard({ reviewerName, review, rating, onUpdateReview }) {
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div>
            <Box sx={{ borderBottom: 2 }}>
                <p>
                    {reviewerName}: {review.review}
                    <br />
                    Rating: {rating}
                </p>
                <p style={{ fontSize: 12 }}>Edit Review <EditOutlinedIcon fontSize="small" onClick={() => toggleEdit((isEditing) => !isEditing)} /></p>
                {isEditing ? <EditReview onUpdateReview={onUpdateReview} review={review}/> : null}
            </Box>
        </div>
    )
}

export default ReviewCard