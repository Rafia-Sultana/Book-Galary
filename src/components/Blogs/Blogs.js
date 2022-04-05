import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h4>What is Context API?</h4>
            <p>Answer:  Context API allows to exchange unique details . It helps to solve the problem prop-drilling from all levels of application.It can produce global variables  that can be passed around. It returns a consumer and provider. It used while data needed to accisible by many componenets.</p>
            <br />
            <h4>What is Semantic tag?</h4>
            <p>Answer:  Semantic tag makes understand the browser content's meaning.It assists search engines to read the page. It makes web pages more informative. It give a better eperience to user.It also define the purpose of the element. </p>
        </div>
    );
};

export default Blogs;