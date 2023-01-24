
import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function DisplayedReviewsComp({ displayedReviews, beginEdit }) {
    const reviewDisplay = displayedReviews.map(r => {
        return (
            <p key={r.id} style={{}}>
                {r.reviewer_name}: {r.review}
                <EditOutlinedIcon fontSize="small" onClick={() => beginEdit((isEditing) => !isEditing)}/>
                <br />
                Rating: {r.item_rating}
            </p>
        ) 
    })

    return (
        <div>
            {reviewDisplay}
        </div>
    )
}

export default DisplayedReviewsComp
