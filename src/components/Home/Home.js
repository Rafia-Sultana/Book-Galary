import React from 'react';
import { Link } from 'react-router-dom';
import UseReview from '../Hook/UseReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css';


const Home = () => {
    const [reviews, setReviews] = UseReview();
    return (
        <div>
            <div className='container'>

                <div className="paragraph">
                    <h1>Thy yourself!</h1>
                    <p>Books are the power of knowledge.By reading this book,the reader can gain real life knowledge and relate themselves with world.</p>
                </div>
                <div className="image" >
                    <img src={'https://previews.123rf.com/images/cre8tive/cre8tive0609/cre8tive060900117/520159-libri-3d-impilati-in-cima-a-eachother.jpg'} alt="" />
                </div>
            </div>
            <hr></hr>
            <div className="">
                <h2 className='review-title'>Customer Reviews</h2>
                <div className="three-review">
                    {
                        reviews.slice(0, 3).map(review => <ReviewCard
                            key={review.id}
                            review={review}


                        ></ReviewCard>)

                    }
                </div>
                <Link to='/reviews' className='btn'>See All reviews</Link>
            </div>


        </div>
    );
};

export default Home;