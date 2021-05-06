import React from "react";
import Navigate from "../components/Navigate";

const Header = () => {
    return (
        <header >
            <h1>Lovely recipes  <i className="fas fa-hamburger"></i></h1>
            <Navigate />
        </header>
    );
};

export default Header;