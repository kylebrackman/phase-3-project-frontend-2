
import React from "react";
import ReviewCard from "./ReviewCard";


function DisplayedReviewsComp({ displayedReviews, onUpdateReview }) {

    const reviewDisplay = displayedReviews.map(r => {
        return (
            <ReviewCard
                key={r.id}
                reviewerName={r.reviewer_name}
                review={r}
                rating={r.item_rating}
                displayedReviews={displayedReviews}
                onUpdateReview={onUpdateReview}
            />
        )
    })

    return (
        <div>
            {reviewDisplay}
        </div>
    )
}

export default DisplayedReviewsComp
