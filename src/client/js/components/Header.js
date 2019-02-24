import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui inverted segment">
            <div className="ui inverted secondary four pointing menu">
                <Link to="/" className="item ">Home</Link>
                <Link to="/" className="item ">About</Link>
                <Link to="/" className="item ">Work</Link>
                <Link to="/" className="item ">Contact</Link>
            </div>
        </div>
    );
};

export default Header;