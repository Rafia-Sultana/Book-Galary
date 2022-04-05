import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { name, img, comments, rating } = review;

    return (
        <div className='customaer-container'>
            <div className="customer">
                <img src={img} alt="" />
                <div className="">
                    <h3>{name}</h3>
                    <small>Rating:{rating}/5</small>
                </div>

            </div>
            <div className="comments">
                `{comments}`
            </div>
        </div>
    );
};

export default ReviewCard;