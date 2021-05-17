import React from 'react';
// import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


const Navigate = () => {
    return (
        <div>
            <Navbar>
                <NavbarCollapse>
                    <Nav className="nav">
                        <Nav.Link href="/React_cooking_app/#/home">Home</Nav.Link>
                        <Nav.Link href="/React_cooking_app/#/recipes">Recipes</Nav.Link>
                        <Nav.Link href="/React_cooking_app/#/about">About</Nav.Link>
                        <Nav.Link href="/React_cooking_app/#/addrecipe">Add recipe</Nav.Link>


                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
};

export default Navigate;

