
import React from "react";
import ReviewCard from "./ReviewCard";


function DisplayedReviewsComp({ displayedReviews, handleUpdateReview }) {
    const reviewDisplay = displayedReviews.map(r => {
        return (
            <ReviewCard
                key={r.id}
                reviewerName={r.reviewer_name}
                review={r.review}
                rating={r.item_rating}
                displayedReviews={displayedReviews}
                handleUpdateReview={handleUpdateReview}
            />
            // <Box sx={{ borderBottom: 2 }} key={r.id}>
            //     <p key={r.id} style={{}}>
            //         {r.reviewer_name}: {r.review}
            //         <br />
            //         Rating: {r.item_rating}
            //     </p>
            //     <p style={{fontSize: 12}}>Edit Review <EditOutlinedIcon fontSize="small" onClick={() => toggleEdit((isEditing) => !isEditing)} /></p>
            // </Box>
            // take styling from here, pass into ReviewCard...
            // toggleEdit will belong to EditReview
        )
    })

    return (
        <div>
            {reviewDisplay}
        </div>
    )
}

export default DisplayedReviewsComp
