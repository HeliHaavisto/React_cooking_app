import React from "react";
import Nav from "../components/Nav";

const Header = () => {
    return (
        <header className="container">
            <h1>Lovely recipes  <i className="fas fa-hamburger"></i></h1>
            <Nav />
        </header>
    );
};

export default Header;