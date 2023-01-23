import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function DisplayedReviewsComp({ displayedReviews, beginEdit }) {
    const dispRev = displayedReviews.map(r => {
        return (
            <p key={r.id} style={{}}>
                {r.reviewer_name}: {r.review} <EditOutlinedIcon fontSize="small" onClick={beginEdit}/> <br />
                Rating: {r.item_rating}
            </p>
        )
    })

    return (
        <div>
            {dispRev}
        </div>
    )
}

export default DisplayedReviewsComp
