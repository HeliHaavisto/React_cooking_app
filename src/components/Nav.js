import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li ><Link to="/home">Home</Link></li>
                    <li ><Link to="/recipes">Recipes</Link></li>
                    <li ><Link to="/about">About</Link></li>
                    <li ><Link to="/addrecipe">Add recipe</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;

