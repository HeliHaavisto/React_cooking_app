import React from 'react';
// import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const Navigate = () => {
    return (
        <div>
            <Navbar>
                <NavbarCollapse>
                    <Nav className="nav">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/addrecipe">Add recipe</Nav.Link>


                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
};

export default Navigate;

