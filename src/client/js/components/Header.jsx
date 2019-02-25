import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Work</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
