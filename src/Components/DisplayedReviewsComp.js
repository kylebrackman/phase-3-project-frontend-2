import React from "react";

function DisplayedReviewsComp({ displayedReviews }) {
    const dispRev = displayedReviews.map(r => {
        return (
            <p key={r.id}>
                {r.reviewer_name}: {r.review} <br />
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
