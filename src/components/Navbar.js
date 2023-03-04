import {Link} from 'react-router-dom'
import React from 'react';

// styles
import './Navbar.css'

// components
import {Searchbar} from "./Searchbar";

export const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </Link>
                <Searchbar />
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    );
};

