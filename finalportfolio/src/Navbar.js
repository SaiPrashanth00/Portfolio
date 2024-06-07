import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Skills'>Skills</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    );
};

export default Navbar;