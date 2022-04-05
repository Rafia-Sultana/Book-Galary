import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/' className='book-container' >Book Gallery</Link>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/reviews'>Review</NavLink>
                <NavLink to='/dashboard' >Dashboard</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </div>
    );
};

export default Header;
