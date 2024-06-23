import React from "react";

const UserReviews = ({ data }) => {
    return (
        <>


            <div className="user-review">
                <div className="rating">
                    <span className="rating-value">{`${data.user_reviews.average_rating}/10`}</span>
                </div>
                <p className="reviews">{`Based on ${data.user_reviews.total_reviews} User`}</p>
                <div className="highlight">
                    <span className="highlight-text">Best in Social Life</span>
                </div>
            </div>
        </>
    )
}

export default UserReviews;