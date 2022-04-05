import React from 'react';
import UseReview from '../Hook/UseReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'


const Review = () => {
    const [reviews, setReviews] = UseReview();
    return (
        <div className='all-review'>
            {
                reviews.map(review => <ReviewCard
                    key={review.id}
                    review={review}


                ></ReviewCard>)

            }
        </div>
    );
};

export default Review;