
import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';


function DisplayedReviewsComp({ displayedReviews, toggleEdit }) {
    const reviewDisplay = displayedReviews.map(r => {
        return (
            <Box sx={{ borderBottom: 2 }} key={r.id}>
                <p key={r.id} style={{}}>
                    {r.reviewer_name}: {r.review}
                    <br />
                    Rating: {r.item_rating}
                </p>
                <p style={{fontSize: 12}}>Edit Review <EditOutlinedIcon fontSize="small" onClick={() => toggleEdit((isEditing) => !isEditing)} /></p>
            </Box>
        )
    })

    return (
        <div>
            {reviewDisplay}
        </div>
    )
}

export default DisplayedReviewsComp
