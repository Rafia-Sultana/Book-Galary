import React from 'react';
import UseReview from '../Hook/UseReview';
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
                <div className="">
                    {

                    }
                </div>
            </div>


        </div>
    );
};

export default Home;