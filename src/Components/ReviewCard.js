import React, { useState } from "react";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';
import EditReview from "./EditReview";

function ReviewCard({ reviewerName, review, rating, displayedReviews }) {
    const [isEditing, setIsEditing] = useState(true)

    function toggleEdit() {
        setIsEditing(!isEditing)
    };
    return (
        <div>
            <Box sx={{ borderBottom: 2 }}>
                <p>
                    {reviewerName}: {review}
                    <br />
                    Rating: {rating}
                </p>
                <p style={{ fontSize: 12 }}>Edit Review <EditOutlinedIcon fontSize="small" onClick={() => toggleEdit((isEditing) => !isEditing)} /></p>
            </Box>
        </div>
    )
}

export default ReviewCard