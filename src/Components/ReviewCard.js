import React, { useState } from "react";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';
import EditReview from "./EditReview";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ReviewCard({ reviewerName, review, rating, onUpdateReview, onDeleteReview }) {
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    function handleDeleteReview(id) {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE",
        })
            .then(() => onDeleteReview(id))
    }

    return (
        <div>
            <Box sx={{ borderBottom: 2 }}>
                <p>
                    {reviewerName}: {review.review}
                    <br />
                    Rating: {rating}
                </p>
                <DeleteOutlineIcon fontSize="small" onClick={() => handleDeleteReview(review.id)}/>
                <p style={{ fontSize: 12 }}>Edit Review <EditOutlinedIcon fontSize="small" onClick={() => toggleEdit((isEditing) => !isEditing)} /></p>
                {isEditing ? <EditReview onUpdateReview={onUpdateReview} review={review}/> : null}
            </Box>
        </div>
    )
}

export default ReviewCard