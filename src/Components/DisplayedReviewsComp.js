
import React from "react";
import ReviewCard from "./ReviewCard";


function DisplayedReviewsComp({ displayedReviews, onUpdateReview, handleDeleteReview }) {

    function onDeleteReview(id) {
        const updatedReviews = displayedReviews.filter(review => review.id !== id)
        handleDeleteReview(updatedReviews)
    }

    const reviewDisplay = displayedReviews.map(r => {
        return (
            <ReviewCard
                key={r.id}
                reviewerName={r.reviewer_name}
                review={r}
                rating={r.item_rating}
                displayedReviews={displayedReviews}
                onUpdateReview={onUpdateReview}
                onDeleteReview={onDeleteReview}              
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
